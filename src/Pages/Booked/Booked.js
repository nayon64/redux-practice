import React from "react";
import ProductCard from "../../componets/ProductCard/ProductCard";
import { useProduct } from "../../contex/ProductProvider/ProductProvider";

const Booked = () => {
  const {
    state: { card, loading, error },
  } = useProduct();

  let content;

  if (loading) {
    content = <p>loading...</p>;
  }
  if (error) {
    content = <p>Please slove your error.</p>;
  }
  if (!loading && !error && card.length <= 0) {
    content = <p>Don't data found.</p>;
  }
  if (!loading && !error && card.length > 0) {
    content = (
      <div className="grid grid-cols-3 gap-8">
        {card.map((d, i) => (
          <ProductCard key={i} d={d}></ProductCard>
        ))}
      </div>
    );
  }
  return <div>{content}</div>;
};

export default Booked;
