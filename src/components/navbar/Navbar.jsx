import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PinchOutlinedIcon from '@mui/icons-material/PinchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search..' />
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <TranslateOutlinedIcon/> 
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon/> 
          </div>
          <div className="item">
            <PinchOutlinedIcon/> 
          </div>
          <div className="item">
            <NotificationsOutlinedIcon/>      
          </div>
          <div className="item">
            <FormatListBulletedOutlinedIcon/> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar