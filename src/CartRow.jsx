import React from "react";
import { HiOutlineMinusCircle } from "react-icons/hi";

function CartRow({ product }) {
  console.log(product);
  let subTotal = product.price * product.quantity;
  subTotal = subTotal.toFixed(2);
  return (
    <tr className=" py-2 h-30 border-b-2 border-[#e6e7eb]">
      <td className="text-3xl w-30 text-gray-300">
        <HiOutlineMinusCircle className="mx-auto" />
      </td>
      <td className="h-20 w-20 ">
        <img
          className="h-full w-full object-cover"
          src={product.image}
          alt={product.name}
        />
      </td>
      <td className="pl-16 text-[#ff5152] font-bold">{product.name}</td>
      <td className="text-center">${product.price.toFixed(2)}</td>
      <td>
        <input
          className="w-14 p-2 border-2 border-[#e6e7eb] rounded"
          type="number"
          value={product.quantity}
        />
      </td>
      <td className="pl-14">${subTotal}</td>
    </tr>
  );
}

export default CartRow;
