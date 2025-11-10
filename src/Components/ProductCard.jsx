import React from "react";
import { IoCartOutline } from "react-icons/io5";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div className="border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max">
      <img
        src={product.image}
        alt={product.title}
        className="bg-gray-100 rounded-2xl aspect-square object-contain p-4"
      />
      {/* aspect-squre give the same height base on the width of the container.---Make this element a perfect square. Width = Height always.---The grid gives each card:

Same column width

Same card width

Since height is controlled by aspect-square, the entire image container becomes:

Same width from grid
Same height from aspect-square */}

      <h1 className="line-clamp-2 p-1 font-semibold">{product.title}</h1>
      <p className="my-1 text-lg text-gray-800 font-bold">${product.price}</p>
      <button className="bg-red-500 px-3 py-2 text-lg rounded-md text-white w-full cursor-pointer flex gap-2 items-center justify-center font-semibold">
        <IoCartOutline className="w-6 h-6" />
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
