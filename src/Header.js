import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Header() {
  return (
    <div className="header">
        {/* logo */}
        <img className="header_logo" src="https://cdn.dribbble.com/users/146773/screenshots/4228811/dribble_cart.gif" alt="logo"/>

    <div className="header_search">
        <input className="header_searchInput" type="text" placeholder="Search"/>
        <SearchIcon className="header_searchIcon"/>
    </div>

     <div className="header_nav">
        
        <div className="header_option">
            <span className="header_optionLineOne">Hello</span>
            <span className="header_optionLineTwo">Sign In</span>
        </div>

        <div className="header_option">
        <span className="header_optionLineOne">Return</span>
            <span className="header_optionLineTwo">&Order</span>
        </div>

        <div className="header_option">
        <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
        </div>

        <div className="header_optionBasket">
            <ShoppingBasketIcon/>
           <span className="header_optionLineTwo header_basketCount">0</span>
        </div>
        
     </div>
    </div>
  )
}

export default Header