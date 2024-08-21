"use client";

"use client";

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertDialog, AlertDialogPortal, AlertDialogOverlay, AlertDialogContent, AlertDialogTitle, AlertDialogDescription } from "@/components/ui/alert-dialog";
import CartItem from './cart-item'; // Ensure this import path matches the location of your CartItem component
import { Button } from "@/components/ui/button";
import { Product } from '@/types/types';

interface CartProps {
  showCart: boolean;
  setShowCart: (show: boolean) => void;
  cart: (Product & { quantity: number })[];
  handleUpdateQuantity: (item: Product & { quantity: number }, quantity: number) => void;
  handleRemoveItem: (item: Product & { quantity: number }) => void;
  totalItems: number;
  totalCost: number;
}

const Cart: React.FC<CartProps> = ({ showCart, setShowCart, cart, handleUpdateQuantity, handleRemoveItem, totalItems, totalCost }) => {
  return (
    <AnimatePresence>
      {showCart && (
        <AlertDialog open={showCart} onOpenChange={setShowCart}>
          <AlertDialogPortal>
            <AlertDialogOverlay className="bg-black/20 backdrop-filter backdrop-blur-sm fixed inset-0" />
            <AlertDialogContent
              as={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl w-[90vw] md:w-[600px] p-6 border border-white border-opacity-20"
            >
              <AlertDialogTitle className="text-2xl font-bold mb-4 text-gray-800">
                Your Cart ({totalItems}) - Total: ${totalCost.toFixed(2)}
              </AlertDialogTitle>
              <AlertDialogDescription className="space-y-4">
                {cart.length > 0 ? (
                  cart.map((item) => (
                    <CartItem
                      key={item.id.toString()}
                      item={item}
                      onUpdateQuantity={handleUpdateQuantity}
                      onRemoveItem={handleRemoveItem}
                    />
                  ))
                ) : (
                  <motion.p
                    className="text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Your cart is empty.
                  </motion.p>
                )}
              </AlertDialogDescription>
              <div className="flex justify-end mt-4">
                <Button
                  className="hover:bg-blue-600 text-white rounded-full transition-colors duration-300 bg-blue-500"
                  onClick={() => setShowCart(false)}
                >
                  Close
                </Button>
              </div>
            </AlertDialogContent>
          </AlertDialogPortal>
        </AlertDialog>
      )}
    </AnimatePresence>
  );
};

export default Cart;