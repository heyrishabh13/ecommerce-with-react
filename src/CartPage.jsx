import React from "react";
import CartList from "./CartList";

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
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className=" grow px-12 py-8 flex items-center bg-[#f4f5f7]">
      <div className="flex-1 bg-gray-50 p-6">
        <CartList cartItems={cartItems} />
        <div className="flex justify-end">
          <div className="bg-white rounded shadow mt-6 w-1/3 flex flex-col gap-2">
            <h3 className="text-gray-700 font-medium mb-4 bg-gray-200 text-xl  px-4 py-4">
              Cart totals
            </h3>
            <div className="flex justify-between px-6 w-3/4 ">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-700">${subTotal.toFixed(2)}</span>
            </div>
            <div className=" border border-b-red-500 mx-4"></div>
            <div className="flex justify-between w-3/4 px-6">
              <span className="text-gray-600">Total</span>
              <span className="text-gray-700">${subTotal.toFixed(2)}</span>
            </div>
            <div className=" border border-b-red-500 mx-4 mb-4"></div>
            <div className="px-4 mb-4">
              <button className="w-full  bg-[#ff5152] text-white py-3 rounded hover:bg-red-600">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
