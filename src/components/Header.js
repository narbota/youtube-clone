import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <div className="nav__menu">
      <div className="left__side">
        <MenuIcon id="menu__icon" />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"
          alt="YouTube Logo"
        />
      </div>
      <div className="search__bar">
        <input id="input__bar" type="text" placeholder="search..." />
        <SearchIcon id="input__button" />
      </div>
      <div className="right__side">
        <VideoCallIcon className="right__icon" />
        <AppsIcon className="right__icon" />
        <NotificationsIcon className="right__icon" />
        <AccountCircleIcon className="right__icon" />
      </div>
    </div>
  );
}

export default Header;
