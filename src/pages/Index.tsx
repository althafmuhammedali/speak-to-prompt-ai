
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Mic, Copy, Send, Key, CreditCard, Sparkles, Menu } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import VoiceInput from "@/components/VoiceInput";
import PaymentModal from "@/components/PaymentModal";
import { promptFrameworks } from "@/utils/promptFrameworks";
import { generatePrompt, sendToGemini } from "@/utils/apiUtils";

const Index = () => {
  const [userInput, setUserInput] = useState('');
  const [selectedFramework, setSelectedFramework] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [geminiApiKey, setGeminiApiKey] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [geminiResponse, setGeminiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  useEffect(() => {
    // Check if user has already paid
    const unlocked = localStorage.getItem('promptGenerator_unlocked') === 'true';
    const savedApiKey = localStorage.getItem('gemini_api_key');
    setIsUnlocked(unlocked);
    if (savedApiKey) {
      setGeminiApiKey(savedApiKey);
    }
  }, []);

  const handleVoiceInput = (transcript: string) => {
    setUserInput(transcript);
    toast({
      title: "Voice Input Received",
      description: "Your voice has been transcribed successfully.",
    });
  };

  const handleGeneratePrompt = () => {
    if (!isUnlocked) {
      setShowPaymentModal(true);
      return;
    }

    if (!userInput.trim() || !selectedFramework) {
      toast({
        title: "Missing Information",
        description: "Please enter your prompt and select a framework.",
        variant: "destructive",
      });
      return;
    }

    const prompt = generatePrompt(userInput, selectedFramework);
    setGeneratedPrompt(prompt);
    toast({
      title: "Prompt Generated!",
      description: "Your formatted prompt is ready.",
    });
  };

  const handleSendToGemini = async () => {
    if (!geminiApiKey.trim()) {
      toast({
        title: "API Key Required",
        description: "Please enter your Gemini API key.",
        variant: "destructive",
      });
      return;
    }

    if (!generatedPrompt.trim()) {
      toast({
        title: "No Prompt",
        description: "Please generate a prompt first.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await sendToGemini(generatedPrompt, geminiApiKey);
      setGeminiResponse(response);
      toast({
        title: "Success!",
        description: "Response received from Gemini AI.",
      });
    } catch (error) {
      console.error('Gemini API Error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send prompt to Gemini.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: "Text copied to clipboard.",
      });
    } catch (error) {
      console.error('Copy failed:', error);
      toast({
        title: "Copy Failed",
        description: "Unable to copy to clipboard. Please try manually selecting the text.",
        variant: "destructive",
      });
    }
  };

  const handlePaymentSuccess = () => {
    setIsUnlocked(true);
    localStorage.setItem('promptGenerator_unlocked', 'true');
    setShowPaymentModal(false);
    toast({
      title: "Payment Successful!",
      description: "You now have full access to the Prompt Generator.",
    });
  };

  const handleApiKeySave = () => {
    if (geminiApiKey.trim()) {
      localStorage.setItem('gemini_api_key', geminiApiKey);
      toast({
        title: "API Key Saved",
        description: "Your Gemini API key has been saved locally.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-2 sm:p-4">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="text-center py-4 sm:py-8">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
            <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Prompt Generator Pro
            </h1>
          </div>
          <p className="text-gray-600 text-sm sm:text-lg px-4">
            Create powerful AI prompts with advanced frameworks and voice input
          </p>
          <div className="mt-2 sm:mt-3">
            {!isUnlocked ? (
              <Badge variant="outline" className="border-orange-500 text-orange-600 text-xs sm:text-sm">
                Free Trial - Upgrade for Full Access
              </Badge>
            ) : (
              <Badge variant="outline" className="border-green-500 text-green-600 text-xs sm:text-sm">
                Pro Version Activated
              </Badge>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
          {/* Input Section */}
          <div className="space-y-4 sm:space-y-6 order-1">
            {/* API Key Section */}
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                  <Key className="h-4 w-4 sm:h-5 sm:w-5" />
                  Gemini API Key
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <Input
                  type="password"
                  placeholder="Enter your Gemini API key..."
                  value={geminiApiKey}
                  onChange={(e) => setGeminiApiKey(e.target.value)}
                  onBlur={handleApiKeySave}
                  className="text-sm"
                />
                <p className="text-xs sm:text-sm text-gray-500">
                  Get your free API key from{" "}
                  <a href="https://ai.google.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Google AI Studio
                  </a>
                </p>
              </CardContent>
            </Card>

            {/* Framework Selection */}
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-sm sm:text-base">Select Prompt Framework</CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={selectedFramework} onValueChange={setSelectedFramework}>
                  <SelectTrigger className="text-sm">
                    <SelectValue placeholder="Choose a framework..." />
                  </SelectTrigger>
                  <SelectContent className="max-h-60 overflow-y-auto">
                    {promptFrameworks.map((framework) => (
                      <SelectItem key={framework.id} value={framework.id}>
                        <div className="text-left">
                          <div className="font-medium text-sm">{framework.name}</div>
                          <div className="text-xs text-gray-500 break-words">{framework.description}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Voice Input Section */}
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                  <Mic className="h-4 w-4 sm:h-5 sm:w-5" />
                  Your Prompt
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <Textarea
                  placeholder="Type your prompt here or use voice input..."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  className="min-h-[100px] sm:min-h-[120px] text-sm resize-none"
                />
                <VoiceInput onTranscript={handleVoiceInput} />
                <Button
                  onClick={handleGeneratePrompt}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-sm sm:text-base py-2 sm:py-3"
                  disabled={!userInput.trim() || !selectedFramework}
                >
                  {!isUnlocked && <CreditCard className="h-4 w-4 mr-2" />}
                  Generate Prompt
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Output Section */}
          <div className="space-y-4 sm:space-y-6 order-2">
            {/* Generated Prompt */}
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center justify-between text-sm sm:text-base">
                  <span>Generated Prompt</span>
                  {generatedPrompt && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCopyToClipboard(generatedPrompt)}
                      className="text-xs sm:text-sm h-8 sm:h-9"
                    >
                      <Copy className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      Copy
                    </Button>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {generatedPrompt ? (
                  <div className="space-y-3 sm:space-y-4">
                    <Textarea
                      value={generatedPrompt}
                      readOnly
                      className="min-h-[150px] sm:min-h-[200px] bg-gray-50 text-sm resize-none"
                    />
                    <Button
                      onClick={handleSendToGemini}
                      disabled={!geminiApiKey.trim() || isLoading}
                      className="w-full text-sm sm:text-base py-2 sm:py-3"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      {isLoading ? "Sending..." : "Send to Gemini"}
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-8 sm:py-12 text-gray-500">
                    <Sparkles className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 opacity-50" />
                    <p className="text-sm sm:text-base">Your generated prompt will appear here</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Gemini Response */}
            {geminiResponse && (
              <Card>
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="flex items-center justify-between text-sm sm:text-base">
                    <span>Gemini AI Response</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCopyToClipboard(geminiResponse)}
                      className="text-xs sm:text-sm h-8 sm:h-9"
                    >
                      <Copy className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      Copy
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200 max-h-60 sm:max-h-80 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-xs sm:text-sm text-gray-800 font-sans">{geminiResponse}</pre>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Payment Modal */}
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          onSuccess={handlePaymentSuccess}
        />
      </div>
    </div>
  );
};

export default Index;
