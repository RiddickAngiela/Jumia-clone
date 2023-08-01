import React from 'react'
import './Header.css'
import { MdStars } from "react-icons/md";
// MdStars

const Header = () => {
  return (
    <div className='header'>
      <div className="top">
        <img src={require('./../../assets/header.gif')} alt="gif-image" />
      </div>
      <div className="middle">
        <div className="left">
          <MdStars/>
          <span>sell on jumia</span>
        </div>
        <div className="right">
          <img style={{height: 15}} src={require('./../../assets/jumia-food.png')} alt="" />
          <img style={{height: 12}} src={require('./../../assets/jumia-pay1.png')} alt="" />
        </div>
      </div>
      <div className="bottom">
        <div className="logo">
          <img style={{height: 80}} src={require('./../../assets/Jumia-Logo.png')} alt="" />
        </div>
        <form className="nosubmit">
          <input className='nosubmit' type="search" placeholder="Search products, brands and categories" />
          <button className='nosubmit'>search</button>
        </form>
        <div className="bottom-a">
          <div className="account">account</div>
          <div className="help">help</div>
          <div className="cart">cart</div>
        </div>
      </div>
    </div>
  )
}

export default Header