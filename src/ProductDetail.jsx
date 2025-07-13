import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { getSingleProduct } from "./api";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const p = getSingleProduct(id);
    p.then((res) => {
      console.log(res.data);
      setProduct(res.data);
    });
  }, [id]);

  if (!product) {
    return (
      <div className="bg-indigo-700 text-white text-3xl max-h-80">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full min-h-full bg-[#f4f5f7] justify-center flex items-center grow px-16">
      <div className="text-3xl">
        {id > 1 && (
          <Link to={"/products/" + (+id - 1)} className="flex items-center">
            <HiArrowNarrowLeft />
          </Link>
        )}
      </div>
      <div className="bg-white py-8 px-12 flex flex-col gap-4 w-[70%] mx-auto">
        <Link className="text-3xl flex items-center text-[#46596b]`" to="/">
          <HiArrowNarrowLeft /> Back
        </Link>
        <div className="flex gap-10">
          <img
            className="w-[50%] h-[50%] object-cover"
            src={product.thumbnail}
            alt="product image"
          />
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl text-[#495560]">{product.title}</h2>
            <h2 className="text-3xl font-medium text-[#54616f]">
              {product.price}
            </h2>
            <p className="text-[#9099a0]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex gap-2">
              <input
                className="border border-gray-200 w-16 px-4 py-1"
                type="number"
                value="1"
              />
              <button className="bg-[#ff5152] text-white px-12 py-2 rounded-md">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-3xl">
        <Link to={"/products/" + (+id + 1)} className="flex items-center">
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
}

export default ProductDetail;
