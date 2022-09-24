import react from "react";
import "./HomePage.css";
import "../Menu/Menu"
import { Menu } from "../Menu/Menu";
function HomePage() {
  return (
    <div className="home-page">
      <div className="home-page-img-1"></div>
      <div className="brand-message">
          <h2>Delicious Food, Delivered To You</h2>
          <p className="message-p1">
            Order your favourite food Items from our broad selection of available food items and enjoy
            a delicious meal.
          </p>
          <p className="message-p2">
            We have an experienced chefs whose cooked these food with high-quality ingredients, just-in-time.
          </p>
      </div>
      <Menu />
    </div>
  );
}

export { HomePage };
