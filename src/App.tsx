import React, { useState } from 'react';
import { ShoppingBag, ShoppingCart } from 'lucide-react';
import { DiscountBanner } from './components/DiscountBanner';
import { HeroCarousel } from './components/HeroCarousel';
import { ProductCard } from './components/ProductCard';
import { PurchaseModal } from './components/PurchaseModal';
import { CartDrawer } from './components/CartDrawer';
import { CartProvider, useCart } from './contexts/CartContext';
import { useProducts } from './hooks/useProducts';
import { Product } from './types/product';

function AppContent() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [discountActive, setDiscountActive] = useState(true);
  const { items, addToCart } = useCart();
  const { products, loading, error } = useProducts();

  // Set discount end time to 24 hours from now
  const discountEndTime = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  const discountPercent = 20;

  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0);

  const getDiscountedPrice = (price: number) => {
    return discountActive ? price * (1 - discountPercent / 100) : price;
  };

  const handlePurchase = (product: Product) => {
    addToCart(product);
    setIsCartOpen(true);
  };

  const handleDirectPurchase = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  const handleConfirmPurchase = () => {
    alert('Thank you for your purchase! Check your email for download instructions.');
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-teal-50">
      {discountActive && (
        <DiscountBanner
          discountPercent={discountPercent}
          endTime={discountEndTime}
          onExpire={() => setDiscountActive(false)}
        />
      )}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-8 w-8 text-teal-500" />
              <h1 className="text-2xl font-bold text-gray-900">Digital Store</h1>
            </div>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-teal-100 rounded-full transition-colors text-gray-900"
            >
              <ShoppingCart size={24} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-teal-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {loading ? (
        <div className="h-[500px] bg-black flex items-center justify-center">
          <div className="text-white text-xl">Loading products...</div>
        </div>
      ) : error ? (
        <div className="h-[500px] bg-black flex items-center justify-center">
          <div className="text-white text-xl">Error: {error.message}</div>
        </div>
      ) : (
        <HeroCarousel products={products} onPurchase={handlePurchase} />
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-black mb-8">All Products</h2>
        {loading ? (
          <div className="text-center text-gray-600">Loading products...</div>
        ) : error ? (
          <div className="text-center text-red-600">Error: {error.message}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                discountActive={discountActive}
                discountPercent={discountPercent}
                discountedPrice={getDiscountedPrice(product.price)}
                onPurchase={handleDirectPurchase}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
      </main>

      {selectedProduct && (
        <PurchaseModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onConfirm={handleConfirmPurchase}
        />
      )}

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleDirectPurchase}
      />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
