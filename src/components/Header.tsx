import Image from "next/image";
import React from "react";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartItemCount,
  onCartClick,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/60 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Area */}
          <div className="shrink-0 flex items-center cursor-pointer gap-2">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
            <span className="text-2xl font-extrabold text-orange-600 tracking-tight">
              Toddev<span className="text-gray-800 font-light">-cooking</span>
            </span>
          </div>

          {/* Navigation / Actions */}
          <div className="flex items-center space-x-6">
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-orange-600 transition-colors duration-200"
              aria-label="Open Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-orange-600 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
