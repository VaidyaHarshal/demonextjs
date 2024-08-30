import React, { useState } from "react";
import Header from "@/components/Header";
import Search from "@/components/Search";
import fetchData from "@/utils/fetchData";
import dynamic from "next/dynamic";
import "../styles/globals.css";

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

const ItemList = dynamic(() => import("@/components/ItemList"), {
  ssr: false,
  loading: () => <p>Loading Item List...</p>,
});

const HomePage = ({ items }: { items: any[] }) => {
  const [data, setData] = useState(items);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (searchTerm: string) => {
    if (searchTerm.trim() === "") {
      setData(items);
      setIsSearching(false);
      return;
    }

    const searchData = await fetchData(1);
    const filteredData = searchData.filter((item: any) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
    setIsSearching(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-6">
        <Search onSearch={handleSearch} />
        <ItemList items={data} />
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  const items = await fetchData();

  return {
    props: {
      items,
    },
  };
};

export default HomePage;
