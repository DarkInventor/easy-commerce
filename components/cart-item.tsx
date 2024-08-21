"use client";

"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon, MinusIcon, TrashIcon } from "lucide-react";
import { CartItemProps } from '@/types/types';

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemoveItem }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (value: number) => {
    setQuantity(value);
    onUpdateQuantity(item, value);
  };

  return (
    <motion.div
      className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-md rounded-2xl shadow-md p-4 flex items-center justify-between border border-gray-200"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
    >
      <div className="flex items-center">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-16 h-16 object-cover mr-4 rounded-xl"
        />
        <div>
          <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
          <p className="text-gray-600">${item.price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <Button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full"
          onClick={() => handleQuantityChange(quantity - 1)}
          disabled={quantity <= 1}
        >
          <MinusIcon size={16} />
        </Button>
        <Input
          type="number"
          min="1"
          value={quantity.toString()}
          onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
          className="w-12 text-center bg-white text-gray-800 rounded-full mx-2"
        />
        <Button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full"
          onClick={() => handleQuantityChange(quantity + 1)}
        >
          <PlusIcon size={16} />
        </Button>
        <Button
          className="bg-red-100 hover:bg-red-200 text-red-600 rounded-full ml-2"
          onClick={() => onRemoveItem(item)}
        >
          <TrashIcon size={16} />
        </Button>
      </div>
    </motion.div>
  );
};

export default CartItem;