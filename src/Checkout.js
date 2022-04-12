import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'
function Checkout() {
   const [{basket,user},dispatch]=useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img
          className='checkout_ad'
          src='https://images-eu.ssl-images-amazon.com/images/G/31/gateway-2015/amazonshop/banner_PC_1FINAL.jpg'
        />
        <div>
          <h2>Hello,{user?.email}</h2>
          <h2 className='checkout_title'>Your shopping brand </h2>
           {basket.map(item=>(
             <CheckoutProduct 
               id={item.id}
               price={item.price}
               title={item.title}
               rating={item.rating}
              image={item.image}
             />
           ))}
        </div>
      </div>
      <div className='checkout_right'>
         <Subtotal/>
      </div>
    </div>
  )
}
export default Checkout
