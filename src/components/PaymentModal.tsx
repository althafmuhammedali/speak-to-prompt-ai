
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Sparkles, Zap, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const PaymentModal = ({ isOpen, onClose, onSuccess }: PaymentModalProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    // In a real implementation, you would integrate with Razorpay here
    try {
      // Mock Razorpay integration
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Payment Successful!",
        description: "Welcome to Prompt Generator Pro!",
      });
      
      onSuccess();
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const features = [
    { icon: Sparkles, text: "Access to all prompt frameworks" },
    { icon: Zap, text: "Unlimited prompt generation" },
    { icon: Shield, text: "Priority support" },
    { icon: Check, text: "Voice input capabilities" },
    { icon: Check, text: "Gemini AI integration" },
    { icon: Check, text: "Copy & export features" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Upgrade to Pro
          </DialogTitle>
        </DialogHeader>
        
        <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
          <CardHeader className="text-center pb-2">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-lg">Prompt Generator Pro</CardTitle>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-3xl font-bold">₹499</span>
              <Badge variant="secondary">One-time</Badge>
            </div>
            <p className="text-sm text-gray-600">Lifetime access</p>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <feature.icon className="h-4 w-4 text-green-600" />
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <Button
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <CreditCard className="h-4 w-4 mr-2" />
              {isProcessing ? "Processing..." : "Pay with Razorpay"}
            </Button>
            
            <p className="text-xs text-center text-gray-500">
              Secure payment powered by Razorpay
            </p>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
