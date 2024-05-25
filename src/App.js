import React, { useState } from "react";
import List from "./components/list";
import Input from "./components/input";
import "./App.css";
import reactLogo from "./logo.svg";
import githubLogo from "./github.svg";

function App() {
  const [items, setItems] = useState([]); // useState allows creating a variable and a function to change its value

  const addItem = (item) => {
    setItems([...items, { text: item, completed: false }]); // the expression ...items adds the item and repeats the existing list of items, instead of just adding a new one
  };

  const toggleItem = (index) => {
    // this function simply toggles the state of the item (opposite of the current state, !completed)
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index); // creates a new array filtering all where i is not equal to the index that should be deleted
    setItems(newItems);
  };

  return (
    <div className="App">
      <header>
        <img src={reactLogo} className="react-logo" alt="React Logo" />

        <a
          href="https://github.com/ashcrysis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} className="github-logo" alt="GitHub Logo" />
        </a>
      </header>
      <h1 id="title">To-Do List</h1>
      <Input addItem={addItem} />
      <List items={items} toggleItem={toggleItem} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
