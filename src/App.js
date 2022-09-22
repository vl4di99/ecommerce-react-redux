import React from "react";
import { useSelector } from "react-redux";
import Product from "./components/Product";
import { selectItems } from "./features/basketSlice";

function App() {
  const items = useSelector(selectItems);

  return (
    <div>
      <header className="flex justify-between items-center p-4">
        <div>
          <h1 className="text-5xl">vl4di99's Store</h1>
          <h2 className="text-2xl">Welcome to my store</h2>
        </div>

        <div>
          <h3>Items in your basket: </h3>
        </div>
      </header>

      <Product title="iPad Pro 2022" />
      <Product title="iPhone 13 Pro Max" />
      <Product title="Rubik's Cube" />
    </div>
  );
}

export default App;
