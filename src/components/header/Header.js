import React from "react";

import Avatar from '../../assets/images/profile-avatar.jpeg';
import NotifyIcon from '../../assets/images/notify-icon.svg';

import './Header.css';

export function Header() {
  return (
    <div className="header d-flex">
      <div className="c-group">
        <div className="header-title">Hi, Dennis Nzioki</div>
        <div className="header-subtitle">Let's finish your task today!</div>
      </div>
      <div className="header-action r-group">
        <div className="header-action-item div-circle d-grid">
          <object className="notify-icon hv-center" type="image/svg+xml" data={NotifyIcon} />
        </div>
        <div className="header-action-item div-circle">
          <img className="profile-avatar" src={Avatar} />
        </div>
      </div>
    </div>
  );
}

export default Header;