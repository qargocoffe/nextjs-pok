
import { CartCounter } from "@/shoppping-cart/components";

export const metadata = {
  title: 'Shopping Cart',
  description: 'Simple description shopping cart',
 };

export default function CounterPage() {

    
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <CartCounter value={ 20 }/>
    </div>
  );
}