import { useState } from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from './components/TodoList';
import NavBar from './components/NavBar';
import About from './About';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import "./Contact.css";
import "./About.css";






function App() {

  return (
    <div className = "to-do-app">
      <NavBar />
     
      <div className="container">
      <img src="./public/images/wood.png " alt="inspirational " />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact"element={<Contact/>} />
        </Routes>
      </div>
      <TodoList />
      
      
    </div>
     
    );
}

export default App;
