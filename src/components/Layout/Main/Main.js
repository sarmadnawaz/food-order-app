import React from "react";
import { Menu } from "../../Menu/Menu"
import { MenuSummary } from "../../Menu/MenuSummary"
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <MenuSummary />
      <Menu />
    </div>
  );
}

export { Main };
