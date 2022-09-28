import React from "react";
import { HeaderCartButton } from "./HeaderCartButton";
import { Logo } from "../../UI/Logo";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Logo />
      <HeaderCartButton />
    </div>
  );
}

export { Header };
