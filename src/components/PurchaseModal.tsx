import React from 'react';
import { X } from 'lucide-react';
import { Product } from '../types/product';

interface PurchaseModalProps {
  product: Product;
  onClose: () => void;
  onConfirm: () => void;
}

export function PurchaseModal({ product, onClose, onConfirm }: PurchaseModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Complete Purchase</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <div className="mb-6">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg mb-4">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h3 className="font-medium text-gray-900">{product.title}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </div>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
            />
            <input
              type="text"
              placeholder="Card number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
              />
              <input
                type="text"
                placeholder="CVC"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
              />
            </div>
          </div>
        </div>
        <button
          onClick={onConfirm}
          className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
        >
          Pay ${product.price}
        </button>
      </div>
    </div>
  );
}