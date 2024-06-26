import './Navbar.css'
import { assets } from '../../assets/assets'

import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import  { StoreContext } from '../../../../Context/StoreContext'
// eslint-disable-next-line react/prop-types
const Navbar = ({setadmin,setShowLogin,showLogin}) => {
 // eslint-disable-next-line no-unused-vars
 const {token,setToken,cartItems,setCartItems}=useContext(StoreContext)

  const logout = () => {
    localStorage.removeItem("token");
    setCartItems({});
    setadmin(false);
    setToken("");
    setShowLogin(true);
  }

  return (
    <div className='navbar'>
      <div className='c1'>
      <a to='/' style={{fontSize:"15px",color:"#FF4C24",padding:"10px 20px", border: "2px solid #FF4C24",borderRadius:"5px",transition: "background-color 0.3s, color 0.3s"}}>FOODIES</a>

      </div>
      <div className='c2'>
        <img className='profile' src={assets.profile_image} alt="" />
        <ul className='dropdown'>
          <li onClick={logout}>
            <img src={assets.logout_icon} alt="" />
            <span onClick={logout}>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
