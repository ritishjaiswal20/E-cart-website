import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider';
function Payment(){
   const [{basket,user},dispatch]=useStateValue();
    return (
    <div className="payment">
        <div className="payment_container">
            <h1>
             Checkout({
                 <Link to='/checkout'>{basket?.length} items</Link>
             } )
            </h1>
          <div className="payment_section">
              <div className="payment_title">
                  <h3>Delivery address</h3>
              </div>
              <div className='payment_address'>
                <p>{user?.email}</p>
                <p>123 React lane</p>
                <p>Los angles,CA</p>
              </div>
          </div>

          <div className="payment_section">
              <div className="payment_title">
                  <h3>Review items and delivery</h3>
              </div>
              <div className="payment_items">
                  {basket.map(item=>(
                      <CheckoutProduct
                       id={item.id}
                       title={item.title}
                       image={item.image}
                       price={item.price}
                       rating={item.rating}
                      />
                  ))}
              </div>
          </div>
          <div className="payment_section">
              <div className="payment_title">
                  <h3>Pament method</h3>
              </div>
              <div className="payment_details"></div>
          </div>

        </div>
    </div>
  )
}

export default Payment