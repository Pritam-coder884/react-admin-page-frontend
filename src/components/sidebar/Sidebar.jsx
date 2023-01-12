import React from "react";
import "./Sidebar.scss";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin-Pannel</span>
      </div>
      <hr />
      <div className="center">
        <div className="center-box">
          <span className="center-heading">MAIN</span>
          <ul className="center-list">
            <li>
              <DashboardOutlinedIcon style={{ color: "blue" }}/>
              <span>Dashboard</span>
            </li>
          </ul>
        </div>
        <div className="center-box">
          <span className="center-heading">LISTS</span>
          <ul className="center-list">
            <li>
              <PersonOutlineOutlinedIcon style={{ color: "blue" }} />
              <span>Users</span>
            </li>
            <li>
              <StoreOutlinedIcon  style={{ color: "blue" }}/>
              <span>Products</span>
            </li>
            <li>
              <CreditCardOutlinedIcon style={{ color: "blue" }}/>
              <span>Orders</span>
            </li>
            <li>
              <LocalShippingOutlinedIcon style={{ color: "blue" }} />
              <span>Delivery</span>
            </li>
          </ul>
        </div>
        <div className="center-box">
          <span className="center-heading">USEFULL</span>
          <ul className="center-list">
            <li>
              <BarChartIcon style={{ color: "white",backgroundColor:"blue" }}/>
              <span>Stats</span>
            </li>
            <li>
              <NotificationsOutlinedIcon style={{ color: "blue" }}/>
              <span>Notification</span>
            </li>
          </ul>
        </div>
        <div className="center-box">
          <span className="center-heading">SERVICE</span>
          <ul className="center-list">
            <li>
              <SettingsIcon style={{ color: "white",backgroundColor:"blue" }}/>
              <span>System Health</span>
            </li>
            <li>
              <SettingsIcon style={{ color: "white",backgroundColor:"blue" }}/>
              <span>Logs</span>
            </li>
            <li>
              <SettingsIcon style={{ color: "white",backgroundColor:"blue" }}/>
              <span>Settings</span>
            </li>
          </ul>
        </div>
        <div className="center-box">
          <span className="center-heading">USER</span>
          <ul className="center-list">
            <li>
              <ExitToAppOutlinedIcon style={{ color: "blue" }}/>
              <span>Profile</span>
            </li>
            <li>
              <ExitToAppOutlinedIcon style={{ color: "blue" }}/>
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <span>THEME</span>
        <div>
          <button className="bottom-btn"></button>
          <button className="bottom-btn dark-btn"></button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
