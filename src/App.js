import React, { useState, useRef, useEffect } from "react";
import List from "./components/list";
import Input from "./components/input";
import "./App.css";
import reactLogo from "./logo.svg";
import githubLogo from "./github.svg";

function App() {
  const [items, setItems] = useState([]); // useState allows creating a variable and a function to change its value
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const menuIconRef = useRef(null);

  const addItem = (item) => {
    const trimmedItem = item.trim();
    if (trimmedItem.length >= 5) {
      setItems([...items, { text: item, completed: false }]); // the expression ...items adds the item and repeats the existing list of items, instead of just adding a new one
    } else {
      window.alert("Task should be at least 5 characters long.");
    }
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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    let initialClick = true;
    document.title = "React To-Do App";
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        menuIconRef.current &&
        !menuIconRef.current.contains(event.target)
      ) {
        if (!initialClick) {
          setSidebarOpen(false);
        } else {
          initialClick = false;
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="App">
      <header>
        <div className="menu-icon" onClick={toggleSidebar} ref={menuIconRef}>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
        <img src={reactLogo} className="react-logo" alt="React Logo" />
        <a
          href="https://github.com/ashcrysis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} className="github-logo" alt="GitHub Logo" />
        </a>
      </header>

      <aside
        className={`sidebar ${sidebarOpen ? "open" : ""}`}
        ref={sidebarRef}
      >
        <div className="user-info">Username</div>
        <button onClick={toggleSidebar} className="close-button">
          X
        </button>
      </aside>

      <Input addItem={addItem} />
      <div class="scrollable-div">
        <List items={items} toggleItem={toggleItem} deleteItem={deleteItem} />
      </div>
      <a
        href="https://www.behance.net/gallery/41263635/Dragon-Cave-gif-animation"
        target="_blank"
        className="background-credit"
        rel="noreferrer"
      >
        Background Image Artist
      </a>
    </div>
  );
}

export default App;
