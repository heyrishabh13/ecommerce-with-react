import React from "react";
import CartRow from "./CartRow";

function CartList({ cartItems }) {
  return (
    <table className="shadow">
      <thead>
        <tr className=" bg-[#e6e7eb] h-16">
          <th></th>
          <th></th>
          <th className="w-92  text-left pl-16">Product</th>
          <th className="w-45 ">Price</th>
          <th className="">Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => {
          return <CartRow key={item.name} product={item} />;
        })}
        <tr>
          <td colSpan={2}>
            <input
              className="border-2 border-[#e6e7eb] rounded p-2 ml-2 mt-2 mb-2"
              type="text"
              placeholder="Coupon Code"
            />
          </td>
          <td className="pl-4">
            <button className="py-2 px-12 rounded bg-[#ff5152] text-white">
              Apply Coupon
            </button>
          </td>
          <td></td>
          <td></td>
          <td className="p-2">
            <button className="py-2 px-12 rounded bg-[#ff5152] text-white">
              Update Cart
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CartList;
