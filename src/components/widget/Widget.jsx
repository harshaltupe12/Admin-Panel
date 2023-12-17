import React from 'react'
import "./widget.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

function Widget({type}) {
  let data;
  const ammount = 100;
  const dif = 50;

  switch(type){

    case "user":
      data = {
        title: "USER",
        isMoney: false,
        link: "See all user",
        icon: (
          <Person2OutlinedIcon className='icon' style={{color: "crimson", backgroundColor: "rgba(255,0,0,0.2)"}}/>
        )}
      break;

      case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all Orders",
        icon: (
          <ShoppingCartOutlinedIcon className='icon' style={{color: "#ebd834", backgroundColor: "#f5f7c3"}}/>
        )}
      break;

      case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net Earnings",
        icon: (
          <MonetizationOnOutlinedIcon className='icon' style={{color: "#3ffc05", backgroundColor: "#d2fac5"}}/>
        )}
      break;

      case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon className='icon' style={{color: "#dc05f0", backgroundColor: "#f6cafa"}}/>
        )}
      break;

      default:
        break;
  }
  return (
    <div className='widget'>
        <div className="left">
          <div className="title">{data.title}</div>
          <div className="counter">{data.isMoney && "$"} {ammount}</div>
          <div className="link">{data.link}</div>
        </div>
        <div className="right">
          <div className="percentage positive ">
            <KeyboardArrowUpIcon />
            {dif}%</div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget