import React ,{useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./Item.css";
import { useDispatch, useSelector } from "react-redux";
import { getTotalAmount,removeFromCart } from "../../shared/actions/cart.action";
// import modal from "../modal/modal";
import Modal from 'react-modal';



function Item(props) {
  let x = Math.random() * 10;
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const product = cart.find((item) => item.id === props.element.id);

  const handleIncrement = () => {

   console.log("xxxx",x);
    let currentCount = product.count && product.count<x? product.count + 1 : 2;
    let obj1 = {
      price: currentCount * product.price,
      id: props.element.id,
      count: currentCount,
    };
    dispatch(getTotalAmount(obj1));
  };

  const handleDecrement = () => {

    let currentCount =
      product.count && product.count > 1 ? product.count - 1 :  setModalIsOpen(true);
    let obj2 = {
      price: product.price * currentCount,
      id: props.element.id,
      count: currentCount,
    };
    dispatch(getTotalAmount(obj2));
  };
  const removeItem=()=>{
    dispatch(removeFromCart(props.element.id))
  }
  const closeModal=()=>{
    setModalIsOpen(false);
    let obj2 = {
      price: product.price * 1,
      id: props.element.id,
      count: 1,
    };
    dispatch(getTotalAmount(obj2));
    return 1
  }

  return (
    <div className="showItem">
      <div className="productImage_div">
        <img src={props.element.image} className="productImage" alt="..." />
      </div>
      <div className="title">
        <h3>{props.element.title}</h3>
        <div className="category">
          <label className="font_weight">Category:</label>
          <span className="spanColor">{props.element.category}</span>
        </div>
        <div className="priceDiv">
          <label className="font_weight">Price:</label>
          <span className="spanColor spanAmount">{product.updatedPrice}</span>
        </div>
        <div className="item_count_div">
          <div>
          <button onClick={handleIncrement}>
            <AddIcon />
          </button>
          <span className="spanColor">{product.count ?? 1}</span>
          <button onClick={handleDecrement}>
            <RemoveIcon />
          </button>
          </div>
          <div>
            <button className="btn remove_btn" onClick={()=>setModalIsOpen(true)}>Remove</button>
          </div>
        </div>
      </div>
     
   
    <Modal className="modal-content modal_div" isOpen={modalIsOpen}>
      <div className="modal-header">
        <h5 className="modal-title">Remove</h5>
        <button type="button" className="btn-close"  onClick={closeModal} aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Do you want to remove this item from cart. </p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn "  onClick={closeModal}>Close</button>
        <button type="button" className="btn " onClick={removeItem}>Save changes</button>
      </div>
      </Modal>
  
    </div>
   
  );
}

export default Item;
