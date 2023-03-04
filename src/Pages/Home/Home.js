import React from 'react';
import ProductCard from '../../componets/ProductCard/ProductCard';
import { useProduct } from '../../contex/ProductProvider/ProductProvider';

const Home = () => {

	const { state: {data, loading, error } } = useProduct();
	console.log(error)

	let content;
	 
	if (loading) {
		 content = <p>loading...</p>
	}
	if (error) {
		content = <p>Please slove your error.</p>
	}
	if (!loading && !error && data.length <= 0) {
		content= <p>Don't data found.</p>
	}
	if (!loading && !error && data.length > 0) {
		content = (
      <div className="grid grid-cols-3 gap-8">
        {data.map((d, i) => <ProductCard key={i} d={d}></ProductCard>)}
      </div>
    );
	}

	console.log(data);
	return (
		<div>
{content}
		</div>
	);
};

export default Home;