import React, { useEffect, useState } from "react";
import Product from "./Product.jsx";
import { getProductList } from "./api.js";

export default function ProductList() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const p = getProductList();
    p.then((res) => {
      console.log(res.data.products);
      setProductList(res.data.products);
    });
  }, []);

  let data = productList.filter((item) => {
    return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });

  data.sort((x, y) => {
    if (sort === "title") {
      return x.title - y.title;
    } else if (sort === "lowToHig") {
      return +x.price - +y.price;
    } else if (sort === "highToLow") {
      return +y.price - +x.price;
    }
  });

  function handleInput(event) {
    setQuery(event.target.value);
  }

  function handleSort(event) {
    setSort(event.target.value);
  }

  return (
    <div className="bg-[#f4f5f7] py-12 ">
      <div className="bg-white w-3/4 mx-auto p-14">
        <div className="flex justify-end gap-2 sm:flex-wrap ">
          <input
            onChange={handleInput}
            value={query}
            placeholder="Search"
            className="pl-2 border border-[#d3d3d3] w-48"
          />
          <select
            value={sort}
            onChange={handleSort}
            className="text-[#d3d3d3] border border-[#d3d3d3] w-48 "
          >
            <option value="default">Default sorting</option>
            <option value="title">Sort by title</option>
            <option value="lowToHigh">Sort by price:low to high</option>
            <option value="highToLow">Sort by price: high to low</option>
          </select>
        </div>
        <div className="mt-8 flex flex-wrap gap-8">
          {data.map((item) => {
            return <Product key={item.id} {...item} />;
          })}
          {data.length === 0 && (
            <h1 className="bg-indigo-700 text-white text-3xl p-4 ">
              No Product available of type {query}
            </h1>
          )}
        </div>

        {data.length > 0 && (
          <div className="flex h-8 gap-2 mt-12">
            <a
              className="bg-[#fc524e] text-white border border-[#fc524e] px-2 py-1"
              href="#"
            >
              1
            </a>
            <a
              className="text-[#fc524e] border border-[#fc524e] px-2 py-1"
              href="#"
            >
              2
            </a>
            <a
              className="text-[#fc524e] border border-[#fc524e] px-2 py-1"
              href="#"
            >
              3
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
