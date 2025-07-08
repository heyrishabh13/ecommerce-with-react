import React from "react";
import CartRow from "./CartRow";

function CartList({ cartItems }) {
  return (
    <table className="shadow">
      <thead>
        <tr className="border border-gray-700">
          <th></th>
          <th></th>
          <th className="w-72 border border-red-700">Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => {
          return <CartRow key={item.name} product={item} />;
        })}
      </tbody>
    </table>
  );
}

export default CartList;
