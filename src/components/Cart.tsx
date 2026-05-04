import React from "react";
import Image from "next/image";
import { CartItem } from "../types";

interface CartProps {
  isOpen: boolean;
  items: CartItem[];
  total: number;
  onClose: () => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export const Cart: React.FC<CartProps> = ({
  isOpen,
  items,
  total,
  onClose,
  onUpdateQuantity,
  onRemove,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-800/10 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md transform transition-all shadow-2xl bg-white flex flex-col h-full animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              <span className="sr-only">Close panel</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-4">
                <svg
                  className="w-16 h-16 opacity-20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <p className="text-lg">Your cart is empty.</p>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={item.id} className="flex py-2">
                    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md border border-gray-200 relative bg-gray-50">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3 className="line-clamp-2 max-w-[180px]">
                            {item.name}
                          </h3>
                          <p className="ml-4">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.id, item.quantity - 1)
                            }
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 text-gray-900 font-medium border-x border-gray-300">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(item.id, item.quantity + 1)
                            }
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemove(item.id)}
                          className="font-medium text-orange-600 hover:text-orange-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 px-6 py-6 bg-gray-50">
              <div className="flex justify-between text-lg font-bold text-gray-900 mb-6">
                <p>Subtotal</p>
                <p>${total.toFixed(2)}</p>
              </div>
              <div className="mt-6">
                <button className="w-full flex items-center justify-center rounded-full border border-transparent bg-gray-900 px-6 py-4 text-base font-medium text-white shadow-sm hover:bg-orange-600 transition-colors duration-200">
                  Checkout
                </button>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or{" "}
                  <button
                    type="button"
                    className="font-medium text-orange-600 hover:text-orange-500"
                    onClick={onClose}
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
