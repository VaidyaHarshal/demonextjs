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

// const Pagination = dynamic(() => import("@/components/Pagination"), {
//   ssr: false,
// });

const HomePage = ({
  items,
  totalPages,
}: {
  items: any[];
  totalPages: number;
}) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(items);
  const [isSearching, setIsSearching] = useState(false);

  // const handlePagination = async (newPage: number) => {
  //   const newData = await fetchData(newPage);
  //   setData(newData);
  //   setPage(newPage);
  //   window.scrollTo(0, 0);
  // };

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
        {/* <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePagination}
          isSearching={isSearching}
        /> */}
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
