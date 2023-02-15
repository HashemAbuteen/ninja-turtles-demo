import React, { useState } from 'react';
import Card from './Card';
import SelectedToppings from './SelectedToppings';
import data from './data.json';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [selectedToppings, setSelectedToppings] = useState([]);

  function handleToppingClick(topping) {
    if (selectedToppings.length < 3) {
      if (!selectedToppings.some((selectedTopping) => selectedTopping === topping)) {
        setSelectedToppings((prevSelectedToppings) => [...prevSelectedToppings, topping]);
        setMessage('');
      } else {
        setMessage(`You have already selected ${topping}. Please choose a different topping.`);
      }
    } else {
      setMessage('You have already selected three toppings. Please remove one before adding another.');
    }
  }

  return (
    <div className="app">
      <div className="cards-container">
        {data.map((ninjaTurtle) => (
          <Card
            key={ninjaTurtle.name}
            ninjaTurtle={ninjaTurtle}
            onToppingClick={handleToppingClick}
          />
        ))}
      </div>
      <p>{message}</p>
      <SelectedToppings
        selectedToppings={selectedToppings}
      />
    </div>
  );
}

export default App;
