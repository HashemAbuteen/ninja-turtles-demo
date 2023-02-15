import React from "react";
import "./SelectedToppings.css";

function SelectedToppings({ selectedToppings }) {
  return (
    <div className="selected-toppings-container">
      <h2>Selected Toppings:</h2>
      {selectedToppings.length > 0 ? (
        <ul className="selected-toppings-list">
          {selectedToppings.map((topping) => (
            <li key={topping}>{topping}</li>
          ))}
        </ul>
      ) : (
        <p>No toppings selected</p>
      )}
    </div>
  );
}

export default SelectedToppings;
