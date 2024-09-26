import * as React from "react";
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/images/logo-main.svg';
import CategoryIcon from '../../assets/images/category-icon.svg';
import BookIcon from '../../assets/images/book-icon.svg';
import UserOctagonIcon from '../../assets/images/user-octagon-icon.svg';
import MessageIcon from '../../assets/images/message-icon.svg';
import SettingIcon from '../../assets/images/setting-icon.svg';

import './Menu.css';

export default class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <div className="menu-header">
          <div className="menu-logo">
            <object type="image/svg+xml" data={Logo} />
          </div>
          <div className="menu-title">DNX</div>
        </div>
        <aside>
          <nav className="menu-list">
            <ul>
              <NavLink to="/">
                <li>
                  <object 
                    className="menu-item-icon"
                    type="image/svg+xml"
                    data={CategoryIcon} 
                  />
                  <span className="menu-item-text">Overview</span>
                </li>
              </NavLink>
              <NavLink to="/">
                <li>
                  <object 
                    className="menu-item-icon" 
                    type="image/svg+xml" 
                    data={BookIcon} 
                  />
                  <span className="menu-item-text">Task</span>
                </li>
              </NavLink>
              <NavLink to="/">
                <li>
                  <object 
                    className="menu-item-icon" 
                    type="image/svg+xml"
                    data={UserOctagonIcon} 
                  />
                  <span className="menu-item-text">Mentors</span>
                </li></NavLink>
              <NavLink to="/">
                <li>
                  <object 
                    className="menu-item-icon" 
                    type="image/svg+xml" 
                    data={MessageIcon} 
                  />
                  <span className="menu-item-text">Message</span>
                </li>
              </NavLink>
              <NavLink to="/">
                <li>
                  <object 
                    className="menu-item-icon" 
                    type="image/svg+xml" 
                    data={SettingIcon} 
                  />
                  <span className="menu-item-text">Settings</span>
                </li>
              </NavLink>
            </ul>
          </nav>
        </aside>
      </div>
    );
  }
}