import React from "react";
import "./Navbar.scss";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import SettingsIcon from "@mui/icons-material/Settings";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-search">
          <input type="text" placeholder="Search.." />
          <SearchOutlinedIcon />
        </div>
        <div className="navbar-icons-section">
          <div className="navbar-icons">
            <LanguageOutlinedIcon />
            English
          </div>
          <div className="navbar-icons">
            <DarkModeOutlinedIcon />
          </div>
          <div className="navbar-icons">
            <FullscreenExitOutlinedIcon />
          </div>
          <div className="navbar-icons">
            <NotificationsNoneOutlinedIcon />
            <span className="navabr-icons-counter">1</span>
          </div>
          <div className="navbar-icons">
            <ChatBubbleOutlineOutlinedIcon />
            <span className="navabr-icons-counter">2</span>
          </div>
          <div className="navbar-icons">
            <ListOutlinedIcon />
          </div>
          <div className="navbar-icons">
            <SettingsIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
