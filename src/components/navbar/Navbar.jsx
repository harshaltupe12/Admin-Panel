import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PinchOutlinedIcon from '@mui/icons-material/PinchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search..' />
          <SearchIcon className='icon'/>
        </div>
        <div className="items">
          <div className="item">
            <TranslateOutlinedIcon className='icon'/> 
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className='icon'/> 
          </div>
          <div className="item">
            <PinchOutlinedIcon className='icon'/> 
          </div>
          <div className="item">
            <NotificationsOutlinedIcon className='icon'/>
            {/* <div className="counter">1</div>       */}
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon'/>   
            {/* <div className="counter">1</div>       */}
          </div>
          <div className="item">
            <FormatListBulletedOutlinedIcon className='icon'/> 
          </div>
          <div className="item">
            <img src="https://xsgames.co/randomusers/assets/avatars/male/63.jpg" className='avtar' alt="avtar"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar