import React from "react";
import { useRouter } from "next/router";

const ItemDetail = ({ item }: { item: any }) => {
  const router = useRouter();

  if (!item) return <p className="text-center text-gray-600">Loading...</p>;

  return (
    <div className="border p-6 rounded-lg shadow-lg bg-white">
      <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
      <p className="text-gray-700 mb-4">{item.body}</p>
      <button
        onClick={() => router.push("/")}
        className="px-4 py-2 rounded bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-md hover:from-blue-500 hover:to-purple-600 transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ItemDetail;
