"use client";

import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";
import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import { Cart } from "../components/Cart";

export function HomePrepage() {
  const { products, loading } = useProducts();
  const {
    cartItems,
    isCartOpen,
    cartTotal,
    cartItemCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleCart,
  } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-orange-200">
      {/* Pure Header Component */}
      <Header cartItemCount={cartItemCount} onCartClick={toggleCart} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Elevate Your Culinary Experience
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of premium tools and ingredients for
            the modern home chef. Crafted for perfection, designed for you.
          </p>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="bg-white rounded-2xl p-4 h-[420px] shadow-sm border border-gray-100 flex flex-col animate-pulse"
              >
                <div className="w-full h-64 bg-gray-200 rounded-xl mb-6"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-auto"></div>
                <div className="flex justify-between mt-6">
                  <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-10 bg-gray-200 rounded-full w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        )}
      </main>

      {/* Pure Cart Component */}
      <Cart
        isOpen={isCartOpen}
        items={cartItems}
        total={cartTotal}
        onClose={toggleCart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
    </div>
  );
}
