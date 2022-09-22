import React from "react";

function Product({ title }) {
  return (
    <div className="flex justify-between items-center p-10 border-blue-700 border m-5">
      <p>{title}</p>
      <button className="p-4 bg-red-500 rounded-2xl focus:outline-none focus:ring-2 ring-red-800 hover:bg-red-300">
        Add to basket
      </button>
    </div>
  );
}

export default Product;
