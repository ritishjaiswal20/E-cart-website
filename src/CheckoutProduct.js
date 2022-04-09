import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from './StateProvider'
function CheckoutProduct({id,price,image,title,rating}) {
  const [{basket},dispatch]=useStateValue();
  const removeFromBasket = () => {
      dispatch({
        type:'REMOVE_FROM_BASKET',
        id:id,
      })
  }
  return (
    <div className="checkout_product">
        <img className="checkoutproduct_Image" src={image} alt="productImage"/>
       <div className="checkoutproduct_info">
           <p className="checkoutproduct_title">{title}</p>
           <p className="checkoutproduct_price">
               <small>Rs</small>
               <strong>{price}</strong>   
            </p>
            <div className="checkoutproduct_rating">
              {Array(rating)
              .fill()
              .map((_,i)=>(
                <p>⭐</p> 
               ))
               }
            </div>
            <button onClick={removeFromBasket}>Remove from cart</button>
         </div>
    </div>
  )
}

export default CheckoutProduct