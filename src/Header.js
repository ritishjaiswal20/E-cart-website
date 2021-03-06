import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";
import {useStateValue} from './StateProvider.js'
import { auth } from './firebase';
function Header() {
    const [{ basket,user }, dispatch] = useStateValue()
   const handleAuthentication=()=>{
      if(user) {
          auth.signOut();
      } 
   }
    return (
    <div className="header">
        {/* logo */}
        <Link to='/'>
        <img className="header_logo"   src="https://www.graphicsprings.com/filestorage/stencils/3055581cff0526602142cbb0bfba9fca.png?width=500&height=500" alt="logo"/>
        </Link>

    <div className="header_search">
        <input className="header_searchInput" type="text" placeholder="Search"/>
        <SearchIcon className="header_searchIcon"/>
    </div>

     <div className="header_nav">
        <Link to={!user && '/login'}>
        <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">Hello,{user?.email}</span>
            <span className="header_optionLineTwo">{user ? 'Sign Out':'Sign IN'}</span>
        </div>
        </Link>
        

        <div className="header_option">
        <span className="header_optionLineOne">Return</span>
            <span className="header_optionLineTwo">&Order</span>
        </div>

        <div className="header_option">
        <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/Checkout">
        <div className="header_optionBasket">
            <ShoppingBasketIcon/>
           <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
        </div>
        </Link>
     </div>
    </div>
  )
}

export default Header
