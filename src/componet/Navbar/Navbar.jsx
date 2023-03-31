import React from 'react'
import { AiOutlineSearch } from"react-icons/ai";
import {MdOutlineNotificationsNone, MdOutlineLanguage,MdOutlineFormatListBulleted, MdOutlineChatBubbleOutline ,MdFullscreen , MdOutlineDarkMode } from "react-icons/md"
import avatar from "../../image/profile.jpg"
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <AiOutlineSearch/>
        </div>

        <div className="items">
          <div className="item">
            <MdOutlineLanguage className='icon'/>
            <p className="en">English</p>
          </div>
          <div className="item">
            <MdOutlineDarkMode className='icon'/>
          </div>
          <div className="item">
            <MdFullscreen className='icon'/>
          </div>
          <div className="item">
            <MdOutlineNotificationsNone className='icon'/>
            <div className="count">1</div>
          </div>
          <div className="item">
            <MdOutlineChatBubbleOutline className='icon'/>
            <div className="count">2</div>
          </div>
          <div className="item">
            <MdOutlineFormatListBulleted className='icon'/>
          </div>
          <div className="item">
            <img src={avatar} alt=""  className='avatar'/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
