import React from 'react'
import './Home.css'
import Product from './Product'
import SimpleImageSlider from "react-simple-image-slider"
{/* <img className="header_logo" src="https://cdn.dribbble.com/users/146773/screenshots/4228811/dribble_cart.gif" alt="logo"/> */}
function Home() {
  const images = [
    { url: "https://m.media-amazon.com/images/I/51SxIk3Wz+L._AC_SY200_.jpg" },
    { url: "images/2.jpg" },
    { url: "images/3.jpg" },
    { url: "images/4.jpg" },
    { url: "images/5.jpg" },
    { url: "images/6.jpg" },
    { url: "images/7.jpg" },
  ];
  return (
    <div className="home">
        <div className="home_container">
  
         <img className="home_image" src="https://m.media-amazon.com/images/I/61pxhbXv8tL._SX3000_.jpg" alt="back"/> 
        <div className="home_rows">
        <div className="home_row">
            <Product title="The lean startup" rating='5' price="123" image="https://m.media-amazon.com/images/I/51SxIk3Wz+L._AC_SY200_.jpg"/>
            <Product title="The lean startup" rating="5" price="123" image="https://m.media-amazon.com/images/I/71Z+l05eSIS._AC_UY327_FMwebp_QL65_.jpg"/>
            <Product title="The lean startup" rating="5" price="123" image="https://m.media-amazon.com/images/I/61XPTRJZcCL._AC_UL480_FMwebp_QL65_.jpg"/>
            <Product title="The lean startup" rating="5" price="123" image="https://m.media-amazon.com/images/I/71Z+l05eSIS._AC_UY327_FMwebp_QL65_.jpg"/>
            <Product title="The lean startup" rating="5" price="123" image="https://m.media-amazon.com/images/I/61XPTRJZcCL._AC_UL480_FMwebp_QL65_.jpg"/>
        </div>
        <div className="home_row">
        <Product title="The lean startup" rating="5" price="123" image="https://m.media-amazon.com/images/I/71kSLhL3NDL._AC_UL480_FMwebp_QL65_.jpg"/>
        <Product title="The lean startup" rating="5" price="123" image="  https://m.media-amazon.com/images/I/81vXk327hOL._AC_UY327_FMwebp_QL65_.jpg"/>
        <Product title="The lean startup" rating="5" price="123" image="https://m.media-amazon.com/images/I/71Z+l05eSIS._AC_UY327_FMwebp_QL65_.jpg"/>
            <Product title="The lean startup" rating="5" price="123" image="https://m.media-amazon.com/images/I/61XPTRJZcCL._AC_UL480_FMwebp_QL65_.jpg"/>
        </div>
        <div className="home_row">
        <Product title="The lean startup" rating="5" price="123" image="https://m.media-amazon.com/images/I/81zLNgcvlaL._AC_UY327_FMwebp_QL65_.jpg"/>
        <Product title="The lean startup" rating="5" price="123" image="https://m.media-amazon.com/images/I/71Z+l05eSIS._AC_UY327_FMwebp_QL65_.jpg"/>
            <Product title="The lean startup" rating="5" price="123" image="https://m.media-amazon.com/images/I/61XPTRJZcCL._AC_UL480_FMwebp_QL65_.jpg"/>
        </div>
        <div className="home_row">
        <Product title="The lean startup" rating="5" price="123" image="https://m.media-amazon.com/images/I/81zLNgcvlaL._AC_UY327_FMwebp_QL65_.jpg"/>
        <Product title="The lean startup" rating="5" price="123" image="https://m.media-amazon.com/images/I/71Z+l05eSIS._AC_UY327_FMwebp_QL65_.jpg"/>
          
        </div>
        <div className="home_row">
        <Product title="The lean startup" rating="5" price="123" image="https://m.media-amazon.com/images/I/81zLNgcvlaL._AC_UY327_FMwebp_QL65_.jpg"/>
        
        </div>
       
        </div>
       
        </div>
    </div>
  )
}

export default Home