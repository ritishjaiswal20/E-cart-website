import React from 'react'
import './Product.css'
import StarRating from 'react-star-rating'
import { useStateValue } from './StateProvider'
function Product({id,title,image,price,rating}) {
   const[{basket},dispatch]= useStateValue();
  const addToBasket=()=>{
   console.log("this the basket",basket);
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    });
  };


  return (
    <div className="product">
        <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>Rs</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
             {Array(rating)
              .fill()
              .map((_,i)=>(
                <p>⭐</p>
              ))
              }
                {/* <p>⭐</p>
                <p>⭐</p>
                <p>⭐</p> */}
         
            </div>
        </div>
        <img src={image} alt="LOGO"/>
        <button onClick={addToBasket}>Add to basket</button>

    </div>  
  )
}

export default Product