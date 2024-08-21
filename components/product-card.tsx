// "use client";

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Product } from '@/types/types';

// interface ProductCardProps {
//   product: Product;
//   onAddToCart: (product: Product) => void;
// }

// const GlassCard = motion(Card);

// const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
//   return (
//     <GlassCard
//       className="bg-white bg-opacity-40 backdrop-filter backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-white border-opacity-20"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 50 }}
//       whileHover={{ y: -5 }}
//     >
//       <div className="h-48 overflow-hidden">
//         <motion.img
//           src={product.imageUrl}
//           alt={product.title}
//           className="w-full h-full object-cover"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.3 }}
//         />
//       </div>
//       <CardHeader className="text-center text-gray-800 font-semibold">
//         {product.title}
//       </CardHeader>
//       <CardContent className="text-center">
//         <p className="text-2xl font-bold text-gray-900">${product.price}</p>
//         <p className="text-gray-600 line-clamp-2">{product.description}</p>
//       </CardContent>
//       <CardFooter className="flex justify-center items-center h-16">
//         <Button
//           className="hover:bg-blue-600 text-white rounded-full transition-colors duration-300"
//           onClick={() => onAddToCart(product)}
//         >
//           Add to Cart
//         </Button>
//       </CardFooter>
//     </GlassCard>
//   );
// };

// export default ProductCard;



// "use client";

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Product } from '@/types/types';

// interface ProductCardProps {
//   product: Product;
//   onAddToCart: (product: Product) => void;
// }

// const GlassCard = motion(Card);

// const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
//   return (
//     <GlassCard
//       className="bg-white bg-opacity-40 backdrop-filter backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-white border-opacity-20"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 50 }}
//       whileHover={{ y: -5 }}
//     >
//       <div className="h-48 overflow-hidden">
//         <motion.img
//           src={product.imageUrl}
//           alt={product.title}
//           className="w-full h-full object-cover"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.3 }}
//         />
//       </div>
//       <CardHeader className="text-center text-gray-800 font-semibold">
//         {product.title}
//       </CardHeader>
//       <CardContent className="text-center">
//         <p className="text-2xl font-bold text-gray-900">${product.price}</p>
//         <p className="text-gray-600 line-clamp-2">{product.description}</p>
//       </CardContent>
//       <CardFooter className="flex justify-center">
//         <Button
//           className="hover:bg-blue-600 text-white rounded-full transition-colors duration-300"
//           onClick={() => onAddToCart(product)}
//         >
//           Add to Cart
//         </Button>
//       </CardFooter>
//     </GlassCard>
//   );
// };

// export default ProductCard;



"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from '@/types/types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const GlassCard = motion(Card);

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <GlassCard
      className="bg-white bg-opacity-40 backdrop-filter backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-white border-opacity-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      whileHover={{
        y: -5,
        scale: 1.02,
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)', // Add glow effect
      }}
    >
      <div className="h-48 overflow-hidden">
        <motion.img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <CardHeader className="text-center text-gray-800 font-semibold">
        {product.title}
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-2xl font-bold text-gray-900">${product.price}</p>
        <p className="text-gray-600 line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="mt-auto py-4 flex justify-center items-end">
        <Button
          className="hover:bg-blue-600 text-white rounded-full transition-colors duration-300"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </GlassCard>
  );
};

export default ProductCard;