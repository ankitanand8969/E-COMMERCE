import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import { useNavigate } from 'react-router-dom';
import Item from "../../components/Items/Item";


function Cart() {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  
  let arr=[];
 
  console.log("cart Item ---->",cart)

  cart.forEach(element => {
     arr.push(element.updatedPrice);
    
  });

  let sum=0;
  for (let i = 0; i <  arr.length; i += 1) {
      sum +=arr[i];
    }
 const continueShopping=(e)=>{
  e.preventDefault();
  navigate("/");
 }
 const procureToPay=(e)=>{
  e.preventDefault();
  navigate("/payment");
 }
  return (
    <div>
      <div className="mainDiv">
        <section className="cart_item_Section">
          <header className="cart_heading">
            <h2>Your Cart</h2>
          </header>
          <div className="cart_item">
            {cart.map((element) => {
              return (
                <div key={element.price}>
                <Item element={element} />
                <hr/>
                </div>
              );
            })}
          </div>
          
          <button className="btn continue_btn" onClick={continueShopping}>Continue Shopping</button>
       
        
        </section>
        <section className="section_div">
        <h2 className="summary_header">Order Summary</h2>
        <div className="itemCountDiv">
          <span>Item</span>
          <span>{cart.length}</span>
        </div>
        <div className="productAmountDiv">
            <span> Product Amount: </span>
              <span className="itemPrice">{sum.toFixed(2)}</span>
          </div>
          <hr/>
          {cart.length>0?
          <button className="btn" onClick={procureToPay}>Make Purchase</button>:<div></div>
          }
        </section>
        
      </div>
    </div>
  );
}

export default Cart;
