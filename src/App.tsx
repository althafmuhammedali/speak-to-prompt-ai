
import React, { useState } from 'react';
import { promptFrameworks, PromptFramework } from './utils/promptFrameworks';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { Separator } from './components/ui/separator';
import { Copy, Sparkles, BookOpen, Lightbulb, Target, Wand2 } from 'lucide-react';
import { useToast } from './hooks/use-toast';
import { Toaster } from './components/ui/toaster';

function App() {
  const [selectedFramework, setSelectedFramework] = useState<PromptFramework | null>(null);
  const [userInput, setUserInput] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const { toast } = useToast();

  const handleFrameworkSelect = (framework: PromptFramework) => {
    setSelectedFramework(framework);
    setGeneratedPrompt('');
  };

  const generatePrompt = () => {
    if (selectedFramework && userInput.trim()) {
      const prompt = selectedFramework.template.replace('{input}', userInput.trim());
      setGeneratedPrompt(prompt);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard",
        description: "The prompt has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Could not copy to clipboard. Please try again.",
        variant: "destructive",
      });
    }
  };

  const getFrameworkIcon = (id: string) => {
    if (id.includes('code') || id.includes('dev')) return <Target className="h-4 w-4" />;
    if (id.includes('ux') || id.includes('design')) return <Lightbulb className="h-4 w-4" />;
    return <BookOpen className="h-4 w-4" />;
  };

  const getFrameworkCategory = (id: string) => {
    if (id.includes('code') || id.includes('dev') || id.includes('bug')) return 'Development';
    if (id.includes('ux') || id.includes('design')) return 'Design';
    return 'General';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Premium Header */}
      <header className="relative overflow-hidden bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-teal-600/5" />
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full border border-blue-200/50">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Premium Prompt Engineering</span>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Prompt Framework Studio
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Transform your ideas into powerful prompts with expert frameworks designed for 
              developers, designers, and professionals.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Framework Selection Panel */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <Wand2 className="h-5 w-5 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">Choose Framework</h2>
            </div>
            
            <div className="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
              {promptFrameworks.map((framework) => (
                <Card 
                  key={framework.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group ${
                    selectedFramework?.id === framework.id 
                      ? 'ring-2 ring-blue-500 shadow-lg bg-gradient-to-br from-blue-50 to-white' 
                      : 'hover:shadow-md border-slate-200 bg-white/70 backdrop-blur-sm'
                  }`}
                  onClick={() => handleFrameworkSelect(framework)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        {getFrameworkIcon(framework.id)}
                        <CardTitle className="text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                          {framework.name}
                        </CardTitle>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className="text-xs font-medium bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700"
                      >
                        {getFrameworkCategory(framework.id)}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm text-slate-600 leading-relaxed">
                      {framework.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {selectedFramework ? (
              <>
                {/* Selected Framework Details */}
                <Card className="bg-gradient-to-br from-white to-blue-50/50 border-blue-200/50 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      {getFrameworkIcon(selectedFramework.id)}
                      <div>
                        <CardTitle className="text-2xl font-bold text-slate-900">
                          {selectedFramework.name}
                        </CardTitle>
                        <CardDescription className="text-base text-slate-600 mt-1">
                          {selectedFramework.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                {/* Input Section */}
                <Card className="shadow-lg border-slate-200/60 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                      <Target className="h-5 w-5 text-blue-600" />
                      Your Input
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      Enter your topic, question, or task that you want to create a prompt for.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <Label htmlFor="user-input" className="text-sm font-medium text-slate-700">
                        Describe your request or topic
                      </Label>
                      <Textarea
                        id="user-input"
                        placeholder="e.g., Help me understand React hooks, Design a mobile app interface, Analyze market trends..."
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        className="min-h-[120px] resize-none border-slate-300 focus:border-blue-400 focus:ring-blue-400/20 text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                    <Button 
                      onClick={generatePrompt}
                      disabled={!userInput.trim()}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Sparkles className="mr-2 h-5 w-5" />
                      Generate Professional Prompt
                    </Button>
                  </CardContent>
                </Card>

                {/* Generated Prompt Section */}
                {generatedPrompt && (
                  <Card className="shadow-xl border-green-200/60 bg-gradient-to-br from-white to-green-50/30">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                          <Lightbulb className="h-5 w-5 text-green-600" />
                          Generated Prompt
                        </CardTitle>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(generatedPrompt)}
                          className="flex items-center gap-2 hover:bg-green-50 border-green-200 text-green-700 hover:text-green-800"
                        >
                          <Copy className="h-4 w-4" />
                          Copy
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-white/80 rounded-lg border border-green-200/50 p-6">
                        <pre className="whitespace-pre-wrap text-sm text-slate-800 leading-relaxed font-mono">
                          {generatedPrompt}
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </>
            ) : (
              /* Welcome State */
              <Card className="shadow-xl bg-gradient-to-br from-white via-slate-50 to-blue-50/50 border-slate-200/60">
                <CardContent className="py-16 text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl">
                    <BookOpen className="h-10 w-10 text-blue-600" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-slate-900">
                      Select a Prompt Framework
                    </h3>
                    <p className="text-lg text-slate-600 max-w-md mx-auto leading-relaxed">
                      Choose from our curated collection of professional prompt frameworks 
                      to create powerful, structured prompts for any use case.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 justify-center pt-4">
                    <Badge variant="secondary" className="px-3 py-1">
                      25+ Frameworks
                    </Badge>
                    <Badge variant="secondary" className="px-3 py-1">
                      Expert Designed
                    </Badge>
                    <Badge variant="secondary" className="px-3 py-1">
                      Ready to Use
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Toaster />
    </div>
  );
}

export default App;
