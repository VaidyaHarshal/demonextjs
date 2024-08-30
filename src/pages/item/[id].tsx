import React from "react";
import fetchData from "../../utils/fetchData";
import dynamic from "next/dynamic";
import "../../styles/globals.css";

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

export async function getStaticPaths() {
  const items = await fetchData(1);
  const paths = items.map((item: any) => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export const getStaticProps = async (context: any) => {
  const { id } = context.params;
  const item = await fetchData(id, true);

  return {
    props: {
      item,
    },
  };
};

export default ItemDetailPage;
