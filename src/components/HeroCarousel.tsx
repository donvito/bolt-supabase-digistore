import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types/product';

interface HeroCarouselProps {
  products: Product[];
  onPurchase: (product: Product) => void;
}

export function HeroCarousel({ products, onPurchase }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [products.length]);

  const currentProduct = products[currentIndex];

  const navigate = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentIndex((current) => (current - 1 + products.length) % products.length);
    } else {
      setCurrentIndex((current) => (current + 1) % products.length);
    }
  };

  return (
    <div className="relative h-[500px] bg-black overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={currentProduct.thumbnail}
          alt={currentProduct.title}
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={() => navigate('prev')}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => navigate('next')}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="absolute bottom-0 inset-x-0 p-8 text-white">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm font-medium mb-4">
            Featured {currentProduct.type.toUpperCase()}
          </span>
          <h2 className="text-4xl font-bold mb-4">{currentProduct.title}</h2>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl">
            {currentProduct.description}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold">${currentProduct.price}</span>
            <button
              onClick={() => onPurchase(currentProduct)}
              className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}