import React from 'react'
import './Navbar.css';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";


function Navbar() {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  
  const onClickOnCart=(e)=>{
    console.log("hellow");
    e.preventDefault();
    navigate("/Cart");
  }
  const onClickOnSignIn=(e)=>{
    e.preventDefault();
    navigate("/signIn");
  }
  return (
    <div className='navbar'>
        <div className='navbarHeader_left'>
            <span className='logo'>Shopping </span>
            <span className='inputField_area'><SearchRoundedIcon/><input className='input_field' type="text"/></span>
        </div>
        <div className='navbarHeader_right'>
            <button onClick={onClickOnSignIn} className='signInBtn' style={{zIndex:"5"}} >SIGN IN</button>
            <div onClick={onClickOnCart}className="cardIconDiv"><div className='cartItemCount'>{cart.length}</div><ShoppingCartRoundedIcon className='cartIcon'/></div>
        </div>
    </div>
  )
}

export default Navbar