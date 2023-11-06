import React, { useContext, useState } from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import logo from '../asstes/logo.png'
import cart_icon from '../asstes/cart_icon.png'
import { ShopContext } from '../../context/ShopContext'
const Navbar = () => {
    const {getTotalCartItems} = useContext(ShopContext)
    const [menu, setMenu] = useState("shop")
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <Link to="/">
                <img src={logo} alt="logo"/>
                <p>logo</p>
            </Link>
        </div>
        <ul className="nav-menu">
            <li onClick={()=> {setMenu("shop")}}><Link to= '/'>shop {menu === "shop"? <hr /> : <></>}</Link> </li>
            <li onClick={()=> {setMenu("men")}}><Link to="/men">men {menu === "men"? <hr /> : <></>}</Link></li>
            <li onClick={()=> {setMenu("women")}}><Link to="/women">women {menu === "women"? <hr /> : <></>}</Link></li>
            <li onClick={()=> {setMenu("kid")}}><Link to= "kids"> kids {menu === "kids"? <hr /> : <></>}</Link></li>
        </ul>
        <div className="nav-login-cart">
            <Link to="/login"><button>login</button></Link>
            <Link to="/cart">
                <img src={cart_icon} alt="" />
            </Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>

        </div>
    </div>
  )
}

export default Navbar