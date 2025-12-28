import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { LineIcon } from './icons/Icons';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleLineClick = () => {
    // TODO: Add the correct LINE URL
    window.open('https://line.me/ti/p/YOUR_LINE_ID', '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] border-t border-slate-100 md:hidden z-50 animate-slide-up">
      <div className="flex flex-col gap-2">
        <div className="text-center text-sm text-slate-700 font-bold px-1">
          <span>丁寧な対応のため<span className="text-red-600 mx-1">【先着1名様/月】</span>限定</span>
        </div>
        <Button 
          variant="line" 
          fullWidth 
          onClick={handleLineClick}
          className="shadow-md py-3 animate-pulse"
        >
          <LineIcon className="w-6 h-6 mr-2" />
          LINEで無料相談する
        </Button>
      </div>
    </div>
  );
};