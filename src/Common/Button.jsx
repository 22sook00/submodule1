"use client";
import React, { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="flex gap-4 my-4">
        <button
          onClick={() => setCount(count + 1)}
          className="rounded-md px-4 py-2 text-white font-semibold bg-[#334155]"
        >
          PLUS BUTTON
        </button>
        <button
          onClick={() => setCount(count > 0 ? count - 1 : 0)}
          className="rounded-md px-4 py-2 text-white font-semibold bg-[#334155]"
        >
          MINUS BUTTON
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-[#f24a6f] text-white rounded-md px-4 py-2 font-semibold"
        >
          RESET
        </button>
      </div>
      <p className="font-semibold"> ➕ COUNT: {count}</p>
    </div>
  );
};

export default Button;
