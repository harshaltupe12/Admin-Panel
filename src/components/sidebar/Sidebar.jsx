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
                <li>
                    <SpaceDashboardIcon/>
                    <span>Dashboard</span>
                </li>
                <li>
                    <PersonOutlineOutlinedIcon/>
                    <span>Users</span>
                </li> 
                <li>
                    <Inventory2OutlinedIcon/>
                    <span>Products</span>
                </li> 
                <li>
                    <ListAltOutlinedIcon/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingOutlinedIcon/>
                    <span>Delivery</span>
                </li>
                <li>
                    <QueryStatsOutlinedIcon/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsActiveOutlinedIcon/>
                    <span>Notification</span>
                </li>
                <li>
                    <MonitorHeartOutlinedIcon/>
                    <span>System Health</span>
                </li>
                <li>
                    <HubOutlinedIcon/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsOutlinedIcon/>
                    <span>Setting</span>
                </li>
                <li>
                    <AccountCircleOutlinedIcon/>
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToAppOutlinedIcon/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>


        <div className="bottom">Color option</div>
    </div>
  )
}

export default Sidebar