"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <main className="flex border border-sky-100 flex-col items-center  p-24">
      <h3 className="text-2xl text-yellow-400 font-bold">SUB 1</h3>
      <div className="flex gap-4 my-4">
        <button
          onClick={() => setCount(count + 1)}
          className="rounded-md px-4 py-2 text-white font-semibold bg-[#334155]"
        >
          COMMON BUTTON
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-[#f24a6f] text-white rounded-md px-4 py-2 font-semibold"
        >
          RESET
        </button>
      </div>
      <p className="font-semibold"> ➕ COUNT: {count}</p>
    </main>
  );
}
