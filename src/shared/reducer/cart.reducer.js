import { ADD_TO_CART,REMOVE_FROM_CART,GET_TOTAL_AMOUNT } from "../action_type/action_type";

const initialState = {
    cart:[]
}

 const cartReducer= (state = initialState, action) => {
    switch (action.type) {
  
    case ADD_TO_CART:
        let updatedCart=[...state.cart,{...action.payload, updatedPrice:action.payload.price}]
      return { ...state,cart:updatedCart }
      case REMOVE_FROM_CART:
        let filterCart=state.cart.filter((item)=> !(item.id===action.payload))
        return{...state,cart:filterCart }
      case GET_TOTAL_AMOUNT:
        let filterCartAmount=state.cart.map((item)=>{
          if(item.id===action.payload.id){
           return  {...item, updatedPrice:action.payload.price ,count:action.payload.count};
          }
          return item;
          })
            return {...state,cart:filterCartAmount }
    default:
      return state
    }
  }
  export default cartReducer;