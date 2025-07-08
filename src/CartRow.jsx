import React from "react";
import { HiOutlineMinusCircle } from "react-icons/hi";

function CartRow({ product }) {
  console.log(product);
  return (
    <tr className="border border-red-700 py-2 h-30">
      <td className="text-3xl w-30">
        <HiOutlineMinusCircle className="mx-auto" />
      </td>
      <td className="h-20 w-20 border border-green-700 ">
        <img
          className="h-full w-full object-cover"
          src={product.image}
          alt={product.name}
        />
      </td>
      <td className="text-right">{product.name}</td>
      <td>${product.price}</td>
      <td>
        <input type="number" value={product.quantity} />
      </td>
      <td>{product.price * product.quantity}</td>
    </tr>
  );
}

export default CartRow;
