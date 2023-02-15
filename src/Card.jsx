import React from "react";
import "./Card.css";

function Card({ ninjaTurtle, onToppingClick }) {
  const handleToppingClick = (toppingName) => {
    onToppingClick(toppingName);
  };

  return (
    <div className="card">
      <h2>{ninjaTurtle.name}</h2>
      <img src={ninjaTurtle.img} alt={ninjaTurtle.name} />
      <div className="toppings-container">
        {ninjaTurtle.pizzaToppings.map((topping) => (
          <button onClick={() => handleToppingClick(topping.name)}>
            {topping.name}
            <img src={topping.img} alt={topping.name} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Card;
