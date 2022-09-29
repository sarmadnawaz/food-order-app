import React from "react";
import { Menu } from "./Menu"
import { MenuSummary } from "./MenuSummary"
import "../styles/Main.css";

function Main() {
  return (
    <div className="main">
      <MenuSummary />
      <Menu />
    </div>
  );
}

export { Main };
