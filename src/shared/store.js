
import { legacy_createStore as createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';



import cartReducer from "../shared/reducer/cart.reducer"

export const Enhancers = compose(applyMiddleware(thunk));


export const store = createStore(cartReducer,Enhancers);
