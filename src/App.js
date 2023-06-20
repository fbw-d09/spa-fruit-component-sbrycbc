import React, { useState } from 'react';
import './App.css';
import Fruit from './components/Fruit';

function App() {
  const [fruits, setFruits] = useState([]);
  const fruitNames = [
    { key: "Apple"  },
    { key: "Mango"  },
    { key: "Banana" },
    { key: "Lemon"  },
  ];

  useState(() => {
    setFruits(fruitNames);
  }, []); 

  const deleteFruit = (deletedFruit) => {
    const updatedFruits = fruits.filter((fruit) => fruit.key !== deletedFruit.key);
    setFruits(updatedFruits);
  };

  const deleteAllFruits = () => {
    setFruits([]); 
  };

  return (
    <div className="App">
    <h1>My Fruit List</h1>
    <button onClick={deleteAllFruits}>Delete all fruits!</button> 
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit.key}>
          <Fruit
            name={fruit.key}
            onDelete={() => deleteFruit(fruit)}
          />
        </li>
      ))}
    </ul>
  </div>
  );
}




export default App;
