import React from "react";

import Menu from "../../components/menu/Menu";

import './Main.css';

export function Main() {
  return (
    <main className="main">
      <div className="main__menu">
        <Menu />
      </div>
    </main>
  );
}

export default Main;