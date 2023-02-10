import {React} from 'react';
import './Card.css';
import { addToCart } from '../../shared/actions/cart.action';
import { useDispatch,useSelector} from 'react-redux';
import { NotificationManager} from 'react-notifications';
function Card(props) {
  const cart=useSelector(state=>state.cart);
  const dispatch=useDispatch();

  const onClickOnAddToCart=()=>{
    let element = cart.find((item)=>item.id === props.productDetail.id);
    if(!element){
         dispatch(addToCart(props.productDetail));
         NotificationManager.success('Your Item Is Added to Your Cart','Thank You');
  }
  else{
    NotificationManager.info( 'This Item is already in your cart');
  }
}
  
  return (
    <div className='card_item'>
      <div className="card">
            <img src={props.productDetail.image} className="card-img-top product_img" alt="..."/>
             <div className="card-body">
                <div className='price_reting_div'>
               <h5 className="card-title">{props.productDetail.category}</h5>
               <h5>{props.productDetail.rating.rate}</h5>
               </div>
             <p className="card-text ">{props.productDetail.title}</p>
             <p>Price:{props.productDetail.price}</p>
              <button className="btn cartBtn" onClick={onClickOnAddToCart}>Add To Cart</button>
             </div>
         </div>
    </div>
  )
}

export default Card