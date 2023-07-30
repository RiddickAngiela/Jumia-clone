import React from 'react'
import { CiApple, CiDumbbell } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoGameControllerOutline } from "react-icons/io5";
import { PiTelevisionSimpleLight, PiTShirtLight, PiDeviceTabletThin} from "react-icons/pi";
import { LuBaby } from "react-icons/lu";
// PiDeviceTabletThin

const HomeNav = () => {
  return (
    <div className='home-nav'>
        <div className='nav-item'>
            <CiApple/>
            <span style={{fontSize: 14}}>Supermarket</span>
        </div>
        <div className='nav-item'>
            <CiApple/>
            <span style={{fontSize: 14}}>Health & Beauty</span>
        </div>
        <div className='nav-item'>
            <CiApple/>
            <span style={{fontSize: 14}}>Home & Office</span>
        </div>
        <div className='nav-item'>
            <CiApple/>
            <span style={{fontSize: 14}}>Appliances</span>
        </div>
        <div className='nav-item'>
            <PiDeviceTabletThin/>
            <span style={{fontSize: 14}}>Phones & Tablets</span>
        </div>
        <div className='nav-item'>
            <HiOutlineComputerDesktop/>
            <span style={{fontSize: 14}}>Computing</span>
        </div>
        <div className='nav-item'>
            <PiTelevisionSimpleLight/>
            <span style={{fontSize: 14}}>TVs & Audio</span>
        </div>
        <div className='nav-item'>
            <PiTShirtLight/>
            <span style={{fontSize: 14}}>Fashion</span>
        </div>
        <div className='nav-item'>
            <IoGameControllerOutline/>
            <span style={{fontSize: 14}}>Gaming</span>
        </div>
        <div className='nav-item'>
            <LuBaby/>
            <span style={{fontSize: 14}}>Baby Products</span>
        </div>
        <div className='nav-item'>
            <CiDumbbell/>
            <span style={{fontSize: 14}}>Sporting Goods</span>
        </div>
    </div>
  )
}

export default HomeNav