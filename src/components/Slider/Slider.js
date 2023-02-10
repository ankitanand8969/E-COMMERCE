import React from 'react';
import './Slider.css';
import shopping_img1 from "./asset/shopping_img1.jpg";
import shopping_img2 from "./asset/shopping_img2.jpg";
import shopping_img3 from "./asset/shopping_img3.jpg";

function Slider() {
  return (
    <div className='slider'>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={shopping_img1} className="d-block w-100 hight" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={shopping_img2} className="d-block w-100 hight" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={shopping_img3} className="d-block w-100 hight" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
    </div>
  )
}

export default Slider