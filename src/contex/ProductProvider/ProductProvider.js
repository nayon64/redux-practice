import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { actionType } from '../../state/ProductState/ActionType';
import { intialState, ProductReducer } from '../../state/ProductState/ProductReducer';



export const ProductContex=createContext()

const ProductProvider = ({ children }) => {
	
	const [state,dispatch]=useReducer(ProductReducer,intialState)

	useEffect(() => {
		console.log("start");
		dispatch({type:actionType.FETCHING_START})
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(res => res.json())
			.then(data => {
				dispatch({ type: actionType.FETCHING_SUCCESS, payload:data})
			})
			.catch(() => {
				dispatch({type:actionType.FETCHING_ERROR})
				
			});
	}, [])
	
	const value={state,dispatch}


	return (
		<ProductContex.Provider value={value}>
			{children}
		</ProductContex.Provider>
	);
};

export const useProduct = () => {
  const context = useContext(ProductContex);
  return context;
};

export default ProductProvider;

