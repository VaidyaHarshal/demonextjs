import React from "react";
import Link from "next/link";

const ItemList = ({ items }: { items: any[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Link
          key={item.id}
          href={`/item/${item.id}`}
          className="bg-white border border-gray-200 rounded-lg p-6 shadow-md transition transform hover:scale-105 hover:shadow-lg hover:border-blue-500"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {item.title}
          </h2>
          <p className="text-gray-700">{item.body}</p>
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
