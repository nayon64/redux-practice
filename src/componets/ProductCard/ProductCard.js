import React from "react";
import { useProduct } from "../../contex/ProductProvider/ProductProvider";
import { actionType } from "../../state/ProductState/ActionType";

const ProductCard = ({ d }) => {

	const {dispatch}=useProduct()

  return (
    <div className="border rounded-lg p-3 text-center">
      <h1 className="text-xl font-semibold">{d.title}</h1>
      <p>
        <span className="text-red-400">userId : </span>
        {d.userId}
      </p>
		  <p>{d.body}</p>
		  <button onClick={()=>dispatch({type:actionType.ADD_TO_CARD, payload:d})} className="py-1 px-3 bg-green-500  rounded-xl text-white mt-6">Add To Card</button>
    </div>
  );
};

export default ProductCard;
