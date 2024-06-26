import { useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({setShowLogin}) => {
  const { cartItems, token, setToken ,getTotalCartAmount} = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  return (
    <div className='navbar'>
      <Link to='/' style={{ fontSize: "25px", color: "#FF4C24", padding: "10px 20px", border: "2px solid #FF4C24", borderRadius: "5px", transition: "background-color 0.3s, color 0.3s" }}>FOODIES</Link>
      <ul className="navbar-menu">
        <Link to="/" className="menu-item">Home</Link>
        <a href='#explore-menu' className="menu-item">Menu</a>
        <a href='#app-download' className="menu-item">Mobile App</a>
        <a href='#footer' className="menu-item">Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="" />
          <div className={getTotalCartAmount()!==0? "dot" : ""}></div>
        </Link>
        {token === "" ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}> <img src={assets.bag_icon} alt="" /> <p>Orders</p></li>
              <hr />
              <li onClick={logout}> <img src={assets.logout_icon} alt="" /> <p>Logout</p></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
