import React from 'react'
import './Footer.css'
import {Link} from "react-router-dom";
function Footer() {
  return (
    <div className="footer">

        <div className="footer_top">
          {/* <Link to="/checkout"> */}
          <p>Back to Cart</p>
          {/* </Link> */}
        </div>
        <div className="footer_bottom">
           <div className="foot">
           <h4>Get to Know us</h4>
               <p>About us</p>
               <p>Careers</p>
               <p>Press relase</p>
               <p>cares</p>
                           
           </div>
           <div className="foot">
               <h4>Connect with Us</h4>
               <p>Facebook</p>
               <p>Twitter</p>
               <p>Instagram</p>
               <p>Github</p>
                              
           </div>
           <div className="foot">
           <h4>	Make Money with Us</h4>
               <p>Sell </p>
               <p>Sell under Accelerator</p>
               <p> Global Sellinge</p>
               <p>Become an Affiliate</p>
                           
                
           </div>
           <div className="foot">
           <h4>Let Us Help You</h4>
               <p>Your Account</p>
               <p>Returns Centre</p>
               <p>100% Purchase Protection</p>
               <p>Help</p>
                           
              
           </div>
        </div>
        <div className="footer_low">
            <p>English</p>
            <p>Hindi</p>
            <p>German</p>
            <p>Japanses</p>
            {/* <p>English</p>
            <p>English</p>
            <p>English</p>
            <p>English</p>
            <p>English</p> */}

        </div>
        <div className="footer_contact">
            <p>Contact Us</p>
            <h5>62746346724</h5>
        </div>
    </div>
  )
}

export default Footer