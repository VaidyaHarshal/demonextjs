import React, { createContext, useContext, useState } from "react";

const ItemContext = createContext<any>(null);

export const useItemContext = () => useContext(ItemContext);

export const ItemProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState([]);

  return (
    <ItemContext.Provider value={{ items, setItems }}>
      {children}
    </ItemContext.Provider>
  );
};
