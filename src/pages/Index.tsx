
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Mic, Copy, Send, Key, CreditCard, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
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
      toast({
        title: "Error",
        description: "Failed to send prompt to Gemini. Please check your API key.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Text copied to clipboard.",
    });
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center py-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-purple-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Prompt Generator Pro
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Create powerful AI prompts with advanced frameworks and voice input
          </p>
          {!isUnlocked && (
            <Badge variant="outline" className="mt-2 border-orange-500 text-orange-600">
              Free Trial - Upgrade for Full Access
            </Badge>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-6">
            {/* API Key Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5" />
                  Gemini API Key
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  type="password"
                  placeholder="Enter your Gemini API key..."
                  value={geminiApiKey}
                  onChange={(e) => setGeminiApiKey(e.target.value)}
                  onBlur={handleApiKeySave}
                />
                <p className="text-sm text-gray-500">
                  Get your free API key from{" "}
                  <a href="https://ai.google.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Google AI Studio
                  </a>
                </p>
              </CardContent>
            </Card>

            {/* Framework Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Select Prompt Framework</CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={selectedFramework} onValueChange={setSelectedFramework}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a framework..." />
                  </SelectTrigger>
                  <SelectContent>
                    {promptFrameworks.map((framework) => (
                      <SelectItem key={framework.id} value={framework.id}>
                        <div>
                          <div className="font-medium">{framework.name}</div>
                          <div className="text-sm text-gray-500">{framework.description}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Voice Input Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mic className="h-5 w-5" />
                  Your Prompt
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Type your prompt here or use voice input..."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  className="min-h-[120px]"
                />
                <VoiceInput onTranscript={handleVoiceInput} />
                <Button
                  onClick={handleGeneratePrompt}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  disabled={!userInput.trim() || !selectedFramework}
                >
                  {!isUnlocked && <CreditCard className="h-4 w-4 mr-2" />}
                  Generate Prompt
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Output Section */}
          <div className="space-y-6">
            {/* Generated Prompt */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Generated Prompt
                  {generatedPrompt && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCopyToClipboard(generatedPrompt)}
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {generatedPrompt ? (
                  <div className="space-y-4">
                    <Textarea
                      value={generatedPrompt}
                      readOnly
                      className="min-h-[200px] bg-gray-50"
                    />
                    <Button
                      onClick={handleSendToGemini}
                      disabled={!geminiApiKey.trim() || isLoading}
                      className="w-full"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      {isLoading ? "Sending..." : "Send to Gemini"}
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <Sparkles className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Your generated prompt will appear here</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Gemini Response */}
            {geminiResponse && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Gemini AI Response
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCopyToClipboard(geminiResponse)}
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <pre className="whitespace-pre-wrap text-sm">{geminiResponse}</pre>
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
