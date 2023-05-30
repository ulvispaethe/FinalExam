import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
const Header = () => {
  return (
    <div className="header">
        <div className="header__left">
            <img src="https://preview.colorlib.com/theme/theestate/images/logo.png" alt="#" /><br />
            <span>THE ESTATE</span>
        </div>
        <div className="header__mid"><ul  className='list'>
            <li><Link className='link'  to="/">Home</Link> </li>
            <li><Link className='link' to="/add">Add</Link></li>
            <li><Link className='link' to="/wishlist">Wishlist</Link></li>
            </ul></div>
        <div className="header__right">
            <div className='forright' >+0080 234 567 84441</div>
        </div>
    </div>
  )
}

export default Header