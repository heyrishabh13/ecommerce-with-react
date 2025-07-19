import React from "react";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

function CartPage() {
  const cartItems = [
    {
      name: "Black Printed Coffee Mug",
      price: 15.0,
      image:
        "https://images.unsplash.com/photo-1641978377056-3f5b2cc523e4?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quantity: 2,
    },
    {
      name: "Printed Dark Blue Tshirt",
      price: 34.0,
      image:
        "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quantity: 4,
    },
  ];

  const subTotal = cartItems.reduce(
    (sum, item) => sum + item.price.toFixed(2) * item.quantity,
    0
  );

  return (
    <div className=" grow px-12 py-8 flex items-center bg-[#f4f5f7]">
      <div className="flex-1 bg-gray-50 p-6">
        <div className="max-w-5xl mx-auto my-12 ">
          <CartList cartItems={cartItems} />
          <CartTotal subTotal={subTotal} />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
