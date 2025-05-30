
import React, { useState, useEffect, useRef } from 'react';
import { Heart, X } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface DonationConfig {
  upiId: string;
  name: string;
  amount: number;
  position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  primaryColor: string;
  buttonText: string;
}

const defaultConfig: DonationConfig = {
  upiId: 'adnanmuhammad4393@okicici',
  name: 'Muhammed Adnan',
  amount: 99,
  position: 'bottom-right',
  primaryColor: '#8B5CF6',
  buttonText: 'Donate'
};

interface DonationWidgetProps {
  config?: Partial<DonationConfig>;
}

export const DonationWidget: React.FC<DonationWidgetProps> = ({ config: userConfig }) => {
  const config = { ...defaultConfig, ...userConfig };
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState(config.amount);
  const [qrLoaded, setQrLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getPositionClasses = () => {
    switch (config.position) {
      case 'bottom-left':
        return 'bottom-5 left-5';
      case 'top-right':
        return 'top-5 right-5';
      case 'top-left':
        return 'top-5 left-5';
      default:
        return 'bottom-5 right-5';
    }
  };

  const generateQRCode = async () => {
    if (!window.QRCode) {
      await loadQRCodeScript();
    }

    const baseUrl = 'upi://pay';
    const params = new URLSearchParams();
    params.append('pa', config.upiId);
    params.append('pn', config.name);
    params.append('am', amount.toString());
    params.append('tn', 'Donation');
    const upiUrl = `${baseUrl}?${params.toString()}`;

    if (canvasRef.current) {
      try {
        // Clear the canvas first
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
        
        await window.QRCode.toCanvas(canvasRef.current, upiUrl, { 
          width: 200,
          height: 200
        });
        setQrLoaded(true);
      } catch (error) {
        console.error('Error generating QR code:', error);
        setQrLoaded(false);
      }
    }
  };

  const loadQRCodeScript = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (window.QRCode) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js';
      script.onload = () => resolve();
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  useEffect(() => {
    if (isOpen && canvasRef.current) {
      setQrLoaded(false);
      generateQRCode();
    }
  }, [isOpen, amount]);

  return (
    <>
      {/* Floating Donation Button with Watermark */}
      <div className={`fixed ${getPositionClasses()} z-50 flex flex-col items-end gap-1`}>
        <Button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-4 py-3"
          style={{ backgroundColor: config.primaryColor }}
        >
          <Heart className="h-4 w-4 fill-current" />
          {config.buttonText}
        </Button>
        
        {/* Watermark */}
        <div className="text-xs text-gray-500 font-mono bg-white/80 px-2 py-1 rounded-md shadow-sm">
          https://codecashier.vercel.app/
        </div>
      </div>

      {/* Donation Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              Support Us
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6"
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
            <DialogDescription>
              Scan this QR code to make a donation
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* QR Code Container */}
            <div className="flex justify-center">
              <div className="w-[200px] h-[200px] bg-gray-100 rounded-lg flex items-center justify-center">
                {!qrLoaded && (
                  <img 
                    src="/lovable-uploads/2b90bf21-a4ca-4abb-8aca-25c9513d422d.png" 
                    alt="Donation QR Code"
                    className="w-full h-full object-contain rounded-lg"
                  />
                )}
                <canvas 
                  ref={canvasRef}
                  width={200}
                  height={200}
                  className={`rounded-lg ${qrLoaded ? 'block' : 'hidden'}`}
                />
              </div>
            </div>

            {/* Amount Input */}
            <div className="space-y-2">
              <Label htmlFor="donation-amount">Amount (₹)</Label>
              <Input
                id="donation-amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="text-right"
                min="1"
              />
            </div>

            {/* UPI Info */}
            <div className="text-center space-y-2">
              <p className="text-sm">
                UPI ID: <strong className="font-mono">{config.upiId}</strong>
              </p>
              <p className="text-xs text-muted-foreground">
                Thank you for your support!
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

// Type declaration for QRCode library
declare global {
  interface Window {
    QRCode: any;
  }
}
