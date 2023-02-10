import { ADD_TO_CART,REMOVE_FROM_CART,GET_TOTAL_AMOUNT } from "../action_type/action_type";

export const addToCart=(payload)=>{
    return (dispatch) => {
        
        dispatch({
          type: ADD_TO_CART,
          payload: payload,
        });
      };
}
export const removeFromCart=(id)=>{
    return (dispatch) => {
        
        dispatch({
          type: REMOVE_FROM_CART,
          payload: id,
        });
      };
}
export const getTotalAmount=(payload)=>{
  return (dispatch) => {
        
    dispatch({
      type: GET_TOTAL_AMOUNT,
      payload: payload,
    });
  };
}