import React from 'react';
import ProductCard from '../../componets/ProductCard/ProductCard';
import { useProduct } from '../../contex/ProductProvider/ProductProvider';

const TopRates = () => {

	const {
    state: { data, loading, error },
  } = useProduct();

	const cData = data;
	let content;
	console.log(data)

  if (loading) {
    content = <p>loading...</p>;
  }
  if (error) {
    content = <p>Please slove your error.</p>;
  }
  if (!loading && !error && cData.length <= 0) {
    content = <p>Don't data found.</p>;
  }
  if (!loading && !error && cData.length > 0) {
    content = (
      <div className="grid grid-cols-3 gap-8">
        {cData
				.filter((d) => {return d.userId = 1 })
          .map((d, i) => (
            <ProductCard key={i} d={d}></ProductCard>
          ))}
      </div>
    );
  }
  return <div>{content}</div>;
};

export default TopRates;