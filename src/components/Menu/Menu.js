import React from "react";
import "./Menu.css";
import { MenuItem } from "./MenuItem";
import data from "../../config/dummData";

function Menu() {
  return (
    <div className="menu">
      <div className="menu-header">
        <h3>Menu</h3>
      </div>
      <div className="menu-sub-header">
        <p>Pizzas</p>
        <p>Burgers</p>
        <p>Sandwiches</p>
        <p>Desserts</p>
        <p>Beverages</p>
      </div>
      <div className="menu-items">
        {data.map(({ image_url, title, price, id }) => {
          return <MenuItem imageUrl={image_url} title={title} price={price} id={id} />;
        })}
      </div>
    </div>
  );
}

export { Menu };
