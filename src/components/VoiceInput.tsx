
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mic, MicOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

interface VoiceInputProps {
  onTranscript: (transcript: string) => void;
}

const VoiceInput = ({ onTranscript }: VoiceInputProps) => {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      toast({
        title: "Speech Recognition Not Supported",
        description: "Your browser doesn't support speech recognition. Please use Chrome or Edge.",
        variant: "destructive",
      });
      return;
    }

    try {
      const SpeechRecognitionAPI = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const newRecognition = new SpeechRecognitionAPI();
      
      newRecognition.continuous = true;
      newRecognition.interimResults = true;
      newRecognition.lang = 'en-US';

      newRecognition.onstart = () => {
        setIsListening(true);
        toast({
          title: "Listening...",
          description: "Speak now to input your prompt.",
          duration: 2000,
        });
      };

      newRecognition.onresult = (event: any) => {
        let finalTranscript = '';
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          }
        }
        
        if (finalTranscript) {
          onTranscript(finalTranscript);
        }
      };

      newRecognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        toast({
          title: "Speech Recognition Error",
          description: `Error: ${event.error}. Please check your microphone permissions and try again.`,
          variant: "destructive",
        });
      };

      newRecognition.onend = () => {
        setIsListening(false);
      };

      setRecognition(newRecognition);
      newRecognition.start();
    } catch (error) {
      console.error('Failed to initialize speech recognition:', error);
      toast({
        title: "Initialization Error",
        description: "Failed to start speech recognition. Please try again.",
        variant: "destructive",
      });
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  return (
    <Button
      variant={isListening ? "destructive" : "outline"}
      onClick={isListening ? stopListening : startListening}
      className={`w-full ${isMobile ? 'text-sm py-3' : 'text-base'} transition-all duration-200`}
    >
      {isListening ? (
        <>
          <MicOff className={`${isMobile ? 'h-4 w-4' : 'h-4 w-4'} mr-2 animate-pulse`} />
          Stop Recording
        </>
      ) : (
        <>
          <Mic className={`${isMobile ? 'h-4 w-4' : 'h-4 w-4'} mr-2`} />
          Voice Input
        </>
      )}
    </Button>
  );
};

export default VoiceInput;
