import React from 'react';
import { FileText, Play } from 'lucide-react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  discountActive: boolean;
  discountPercent: number;
  discountedPrice: number;
  onPurchase: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({
  product,
  discountActive,
  discountPercent,
  discountedPrice,
  onPurchase,
  onAddToCart
}: ProductCardProps) {
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-xl">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-gray-900">
            {product.type === 'pdf' ? <FileText size={20} /> : <Play size={20} />}
          </span>
          <span className="text-sm font-medium text-gray-900 uppercase">
            {product.type}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {product.categories.map((category) => (
            <span
              key={category}
              className="px-2 py-1 text-xs font-medium bg-teal-100 text-teal-600 rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-900">
              ${discountedPrice.toFixed(2)}
            </span>
            {discountActive && (
              <div className="flex items-center gap-2">
                <span className="text-sm line-through text-gray-500">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-sm font-medium text-teal-600">
                  -{discountPercent}%
                </span>
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onAddToCart(product)}
              className="px-4 py-2 bg-teal-100 text-teal-600 rounded-lg hover:bg-teal-200 transition-colors"
            >
              Add to Cart
            </button>
            <button
              onClick={() => onPurchase(product)}
              className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}