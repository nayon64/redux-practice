import { actionType } from "./ActionType"

export const intialState = {
	loading: false,
	data: [],
	error: false,
	card:[]
}


export const ProductReducer = (state, action) => {
	switch (action.type) {
		case actionType.FETCHING_START: return {
			...state,
			loading: true,
			error:false
		}
		case actionType.FETCHING_SUCCESS: return {
			...state,
			loading: false,
			data: action.payload,
			error: false
		}
		case actionType.FETCHING_ERROR: return {
			...state,
			loading: false,
			error: true,
		}
		case actionType.ADD_TO_CARD: return {
			...state,
			loading: false,
			error: false,
			card:[...state.card,action.payload]
		}
		default: return state
	}
}