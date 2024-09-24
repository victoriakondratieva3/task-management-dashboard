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
      <div className="menu__wrapper">
        <div className="menu__header">
          <div className="menu__logo">
            <object type="image/svg+xml" data={Logo} />
          </div>
          <div className="menu__title">DNX</div>
        </div>
        <nav className="menu__list">
          <ul>
            <NavLink to="/">
              <li>
                <object className="item-icon" type="image/svg+xml" data={CategoryIcon} />
                <span className="item-text">Overview</span>
              </li>
            </NavLink>
            <NavLink to="/">
              <li>
                <object className="item-icon" type="image/svg+xml" data={BookIcon} />
                <span className="item-text">Task</span>
              </li>
            </NavLink>
            <NavLink to="/">
              <li>
                <object className="item-icon" type="image/svg+xml" data={UserOctagonIcon} />
                <span className="item-text">Mentors</span>
              </li></NavLink>
            <NavLink to="/">
              <li>
                <object className="item-icon" type="image/svg+xml" data={MessageIcon} />
                <span className="item-text">Message</span>
              </li>
            </NavLink>
            <NavLink to="/">
              <li>
                <object className="item-icon" type="image/svg+xml" data={SettingIcon} />
                <span className="item-text">Settings</span>
              </li>
            </NavLink>
          </ul>
        </nav>
      </div>
    );
  }
}