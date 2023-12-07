import React from 'react'
import "./sidebar.scss"
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className='logo'>Logo here</span>
        </div>
        <hr/>

        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <SpaceDashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <li>
                    <PersonOutlineOutlinedIcon className='icon'/>
                    <span>Users</span>
                </li> 
                <li>
                    <Inventory2OutlinedIcon className='icon'/>
                    <span>Products</span>
                </li> 
                <li>
                    <ListAltOutlinedIcon className='icon'/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingOutlinedIcon className='icon'/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <QueryStatsOutlinedIcon className='icon'/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsActiveOutlinedIcon className='icon'/>
                    <span>Notification</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <MonitorHeartOutlinedIcon className='icon'/>
                    <span>System Health</span>
                </li>
                <li>
                    <HubOutlinedIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsOutlinedIcon className='icon'/>
                    <span>Setting</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleOutlinedIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToAppOutlinedIcon className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>


        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar