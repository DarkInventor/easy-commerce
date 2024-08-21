export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    imageUrl: string;
  }
  
  export interface CartItemProps {
    item: Product & { quantity: number };
    onUpdateQuantity: (item: Product & { quantity: number }, quantity: number) => void;
    onRemoveItem: (item: Product & { quantity: number }) => void;
  }