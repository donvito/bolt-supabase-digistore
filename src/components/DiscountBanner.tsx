import React from 'react';
import { Sparkles } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

interface DiscountBannerProps {
  discountPercent: number;
  endTime: Date;
  onExpire: () => void;
}

export function DiscountBanner({ discountPercent, endTime, onExpire }: DiscountBannerProps) {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            <span className="font-bold">
              Special Offer! {discountPercent}% OFF Everything
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span>Ends in:</span>
            <CountdownTimer endTime={endTime} onExpire={onExpire} />
          </div>
        </div>
      </div>
    </div>
  );
}