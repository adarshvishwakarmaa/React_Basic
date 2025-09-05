# React Basics 🚀

This project is a **beginner-friendly React app** that covers fundamental concepts like JSX, components, props, state, fragments, and navigation with React Router.

---

## 📌 What is React?
React is a **JavaScript library** created by Facebook for building **user interfaces (UI)**.  
It helps developers build **single-page applications (SPA)** where content updates dynamically without reloading the entire page.

👉 Key Features:
- Component-based architecture  
- Virtual DOM for faster rendering  
- Reusable UI elements  
- Easy state management  

---

## 🤔 Why Use React?
- **Fast Rendering** → Uses Virtual DOM instead of updating the real DOM directly.  
- **Reusable Components** → Write once, use anywhere.  
- **Great Ecosystem** → Tons of libraries and community support.  
- **Easy to Learn** → Simple compared to other frameworks.  

---

## 🔹 React Fragment
In React, components must return a single parent element.  
A **Fragment** lets you group multiple elements **without adding extra `<div>` in the DOM**.



```jsx
import React from "react";

function Example() {
  return (
    <>
      <h1>Hello</h1>
      <p>This is inside a fragment</p>
    </>
  );
}

export default Example;


🔹 React Router DOM (Navigation)
react-router-dom is used for navigation between pages in React without reloading the page.

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}


🔹 What is JSX?

JSX (JavaScript XML) is a syntax extension that lets you write HTML inside JavaScript.

const element = <h1>Hello, JSX!</h1>;


🔹 What is the DOM in React?

DOM = Document Object Model (tree structure of the webpage).
React uses a Virtual DOM, which is a copy of the real DOM.
When something changes, React updates only the necessary parts instead of re-rendering the entire DOM → makes apps faster.


🔹 Props in React

Props (short for Properties) are used to pass data from parent to child components.
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return <Welcome name="Adarsh" />;
}


🔹 useState Hook

useState is a React Hook that lets you add state to a functional component.
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;


