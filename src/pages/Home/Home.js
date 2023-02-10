import {React,useState,useEffect} from 'react'
import Slider from '../../components/Slider/Slider';
import Card from '../../components/Card/Card';
import API from '../../constant';
import axios from "axios";
import "./Home.css"
import Footer from '../../components/Footer/Footer';
function Home() {
  const [item, setItem] = useState([]);
  const [filterItem, setFilterItem]= useState([]);
  useEffect(() => {
    const fetchData = async () => {
      
      
      // await axios.get(API).then((response) => {
      //   setItem(response.data);
      //   setFilterItem(response.data);
      // });
      const response = await fetch(API).then(response => response.json())

      //console.log("data is ---->",response);
      setItem(response.data)
      setFilterItem(response.data);
    }
    fetchData();
    
  },[])
  //console.log("filterItem", filterItem)
  
  const getElectronicsItem=()=>{
    const electronicsItems=item.filter((item)=>item.category==="electronics")
    setFilterItem(electronicsItems);
  }

  const getJeweleryItem=()=>{
    const electronicsItems=item.filter((item)=>item.category==="jewelery")
    setFilterItem(electronicsItems);
  }
  const getManClothingItem=()=>{
    const electronicsItems=item.filter((item)=>item.category==="men's clothing")
    setFilterItem(electronicsItems);
  }
  const getWomanClothingItem=()=>{
    const electronicsItems=item.filter((item)=>item.category==="women's clothing")
    setFilterItem(electronicsItems);
  }


  return (
    <div>
     <Slider/>
     <div className='categoriesContainer'>
      <div className='categoriesDiv' onClick={getElectronicsItem}>Electronics</div>
      <div  className='categoriesDiv' onClick={getJeweleryItem}>Jewelery</div>
      <div  className='categoriesDiv' onClick={getManClothingItem}>Men's Clothing</div>
      <div  className='categoriesDiv'onClick={getWomanClothingItem}>Women's Clothing</div>
     </div>

     <div className='card_item_div'>
     {
     filterItem.map((element,index)=>{
       return <Card key={index} productDetail={element}/>;
     })
    }
    </div>
    <Footer/>
    </div>
   
  )
}

export default Home