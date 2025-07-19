import React from "react";

function CartTotal({subTotal}) {
  return (
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
  );
}

export default CartTotal;
