import React from "react";
import Image from "next/image";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
}) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-sm  hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      <div className="relative w-full h-64 overflow-hidden bg-gray-100">
        {/* Next.js Image component handles optimization */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm mb-6 flex-grow">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
