// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ShoppingCartIcon, PlusIcon, MinusIcon, TrashIcon } from "lucide-react";
// import {
//   Card,
//   CardHeader,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import {
//   AlertDialog,
//   AlertDialogPortal,
//   AlertDialogOverlay,
//   AlertDialogContent,
//   AlertDialogTitle,
//   AlertDialogDescription,
//   AlertDialogAction,
// } from "@/components/ui/alert-dialog";

// // ... (Product and CartItemProps interfaces remain the same)

// const GlassCard = motion(Card);

// const ProductCard = ({
//   product,
//   onAddToCart,
// }: {
//   product: Product;
//   onAddToCart: (product: Product) => void;
// }) => {
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
//       <CardFooter className="text-center">
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

// const CartItem = ({ item, onUpdateQuantity, onRemoveItem }: CartItemProps) => {
//   const [quantity, setQuantity] = useState(item.quantity);

//   const handleQuantityChange = (value: number) => {
//     setQuantity(value);
//     onUpdateQuantity(item, value);
//   };

//   return (
//     <motion.div
//       className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-md rounded-2xl shadow-md p-4 flex items-center justify-between border border-gray-200"
//       initial={{ opacity: 0, x: -50 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: 50 }}
//     >
//       <div className="flex items-center">
//         <img
//           src={item.imageUrl}
//           alt={item.title}
//           className="w-16 h-16 object-cover mr-4 rounded-xl"
//         />
//         <div>
//           <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
//           <p className="text-gray-600">${item.price}</p>
//         </div>
//       </div>
//       <div className="flex items-center">
//         <Button
//           className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full"
//           onClick={() => handleQuantityChange(quantity - 1)}
//           disabled={quantity <= 1}
//         >
//           <MinusIcon size={16} />
//         </Button>
//         <Input
//           type="number"
//           min="1"
//           value={quantity.toString()}
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//             handleQuantityChange(parseInt(e.target.value))
//           }
//           className="w-12 text-center bg-white text-gray-800 rounded-full mx-2"
//         />
//         <Button
//           className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full"
//           onClick={() => handleQuantityChange(quantity + 1)}
//         >
//           <PlusIcon size={16} />
//         </Button>
//         <Button
//           className="bg-red-100 hover:bg-red-200 text-red-600 rounded-full ml-2"
//           onClick={() => onRemoveItem(item)}
//         >
//           <TrashIcon size={16} />
//         </Button>
//       </div>
//     </motion.div>
//   );
// };

// const EcommerceLandingPage = () => {
//   const [cart, setCart] = useState<(Product & { quantity: number })[]>([]);
//   const [products, setProducts] = useState<Product[]>([]);
//   const [showCart, setShowCart] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);

//   useEffect(() => {
//     // Fetch products from an API
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(
//           data.map((product: any) => ({
//             id: product.id,
//             title: product.title,
//             price: product.price,
//             description: product.description,
//             imageUrl: product.image,
//           }))
//         );
//       });
//   }, []);

//   const handleAddToCart = (product: Product) => {
//     const existingItem = cart.find((item) => item.id === product.id);
//     if (existingItem) {
//       setCart(
//         cart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//     setShowAlert(true);
//   };

//   const handleUpdateQuantity = (
//     item: Product & { quantity: number },
//     quantity: number
//   ) => {
//     setCart(
//       cart.map((cartItem) =>
//         cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
//       )
//     );
//   };

//   const handleRemoveItem = (item: Product & { quantity: number }) => {
//     setCart(cart.filter((cartItem) => cartItem.id !== item.id));
//   };

//   const handleCloseAlert = () => {
//     setShowAlert(false);
//   };

//   const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
//   const totalCost = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white text-gray-900">
//       <div className="container mx-auto py-8">
//         <motion.div
//           className="flex justify-between items-center mb-8"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           <h1 className="text-4xl font-bold text-gray-800">Clean E-commerce</h1>
//           <Button
//             className="hover:bg-blue-600 text-white rounded-full transition-colors duration-300"
//             onClick={() => setShowCart(true)}
//           >
//             <ShoppingCartIcon className="mr-2" size={20} /> Cart ({totalItems})
//           </Button>
//         </motion.div>

//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: {
//               opacity: 1,
//               transition: {
//                 staggerChildren: 0.1,
//               },
//             },
//           }}
//         >
//           {products.map((product) => (
//             <ProductCard
//               key={product.id.toString()}
//               product={product}
//               onAddToCart={handleAddToCart}
//             />
//           ))}
//         </motion.div>

//         <AnimatePresence>
//           {showCart && (
//             <AlertDialog open={showCart} onOpenChange={setShowCart}>
//               <AlertDialogPortal>
//                 <AlertDialogOverlay className="bg-black/20 backdrop-filter backdrop-blur-sm fixed inset-0" />
//                 <AlertDialogContent
//                   as={motion.div}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl w-[90vw] md:w-[600px] p-6 border border-white border-opacity-20"
//                 >
//                   <AlertDialogTitle className="text-2xl font-bold mb-4 text-gray-800">
//                     Your Cart ({totalItems}) - Total: ${totalCost.toFixed(2)}
//                   </AlertDialogTitle>
//                   <AlertDialogDescription className="space-y-4">
//                     <AnimatePresence>
//                       {cart.length > 0 ? (
//                         cart.map((item) => (
//                           <CartItem
//                             key={item.id.toString()}
//                             item={item}
//                             onUpdateQuantity={handleUpdateQuantity}
//                             onRemoveItem={handleRemoveItem}
//                           />
//                         ))
//                       ) : (
//                         <motion.p
//                           className="text-gray-600"
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           exit={{ opacity: 0 }}
//                         >
//                           Your cart is empty.
//                         </motion.p>
//                       )}
//                     </AnimatePresence>
//                   </AlertDialogDescription>
//                   {/* <AlertDialogAction className="flex justify-end mt-4 bg-transparent !hover:none"> */}
//                     <Button
//                       className="hover:bg-blue-600 text-white rounded-full transition-colors duration-300 bg-blue-500"
//                       onClick={() => setShowCart(false)}
//                     >
//                       Close
//                     </Button>
//                   {/* </AlertDialogAction> */}
//                 </AlertDialogContent>
//               </AlertDialogPortal>
//             </AlertDialog>
//           )}
//         </AnimatePresence>

//         <AnimatePresence>
//           {showAlert && (
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 50 }}
//               className="fixed bottom-4 right-4"
//             >
//               <Alert className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg text-gray-800 rounded-2xl shadow-lg p-4 border border-white border-opacity-20">
//                 <AlertTitle className="font-bold">
//                   Item added to cart
//                 </AlertTitle>
//                 <AlertDescription>
//                   The item has been successfully added to your cart.
//                 </AlertDescription>
//                 <Button
//                   className="hover:bg-blue-600 text-white rounded-full mt-2 transition-colors duration-300 "
//                   onClick={handleCloseAlert}
//                 >
//                   Close
//                 </Button>
//               </Alert>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default EcommerceLandingPage;


"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingCartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import AlertNotification from "@/components/alert-notification";
import Cart from "@/components/cart";
import ProductCard from "@/components/product-card";
import { Product } from "@/types/types";

const EcommerceLandingPage = () => {
  const [cart, setCart] = useState<(Product & { quantity: number })[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Fetch products from an API
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(
          data.map((product: any) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            imageUrl: product.image,
          }))
        );
      });
  }, []);

  const handleAddToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setShowAlert(true);
  };

  const handleUpdateQuantity = (
    item: Product & { quantity: number },
    quantity: number
  ) => {
    setCart(
      cart.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  const handleRemoveItem = (item: Product & { quantity: number }) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalCost = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white text-gray-900">
      <div className="container mx-auto py-8">
        <motion.div
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-800">Clean E-commerce</h1>
          <Button
            className="hover:bg-blue-600 text-white rounded-full transition-colors duration-300"
            onClick={() => setShowCart(true)}
          >
            <ShoppingCartIcon className="mr-2" size={20} /> Cart ({totalItems})
          </Button>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id.toString()}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </motion.div>

        <Cart
          showCart={showCart}
          setShowCart={setShowCart}
          cart={cart}
          handleUpdateQuantity={handleUpdateQuantity}
          handleRemoveItem={handleRemoveItem}
          totalItems={totalItems}
          totalCost={totalCost}
        />

        <AlertNotification showAlert={showAlert} handleCloseAlert={handleCloseAlert} />
      </div>
    </div>
  );
};

export default EcommerceLandingPage;
