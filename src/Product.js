import React from 'react'
import './Product.css'
import StarRating from 'react-star-rating'
function Product({title,image,price,rating}) {
  return (
    <div className="product">
        <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>Rs</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
             {/* {Array(rating)
              .fill()
              .map((_,i)=>(
                <p>⭐</p>
              ))
              } */}
                <p>⭐</p>
                <p>⭐</p>
                <p>⭐</p>
         
            </div>
        </div>
        <img src={image} alt="LOGO"/>
        <button>Add to basket</button>

    </div>  
  )
}

export default Product