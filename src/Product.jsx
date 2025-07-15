import React from "react";
import Sale from "./Sale.jsx";
import { Link } from "react-router-dom";

export default function Product({
  title,
  thumbnail,
  category,
  price,
  sale,
  salePrice,
  id,
}) {
  return (
    <div className="relative shadow rounded">
      <img
        className="w-64 h-64 object-cover"
        src={thumbnail}
        alt="product Image"
      />

      {sale && <Sale />}
      <div className="p-2">
        <p className="text-[#d3d3d3]">{category}</p>
        <h2>{title}</h2>
        <div className="flex justify-between">
          {salePrice ? (
            <p>
              <span className="line-through text-[#d3d3d3]">${salePrice}</span>{" "}
              ${price}
            </p>
          ) : (
            <p>${price}</p>
          )}
          <Link
            to={"/products/" + id}
            className="bg-[#fb5449] text-xs px-2 py-1 rounded text-white"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}
