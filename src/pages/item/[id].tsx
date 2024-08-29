import React from "react";
import fetchData from "../../utils/fetchData";
import dynamic from "next/dynamic";

const ItemDetail = dynamic(() => import("@/components/ItemDetail"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const ItemDetailPage = ({ item }: { item: any }) => {
  return (
    <div className="container mx-auto p-6">
      <ItemDetail item={item} />
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const { id } = context.params;
  const item = await fetchData(id, true);

  return {
    props: {
      item,
    },
  };
};

export default ItemDetailPage;
