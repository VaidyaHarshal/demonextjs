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
  // Fetch the list of items to generate paths
  const items = await fetchData(); // Fetch all items or a list of item IDs

  const paths = items.map((item: any) => ({
    params: { id: item.id.toString() }, // Ensure id is a string
  }));

  return {
    paths,
    fallback: false, // or 'blocking' or 'true' depending on your use case
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
