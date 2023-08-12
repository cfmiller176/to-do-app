import { useState } from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from './components/TodoList';
import NavBar from './components/NavBar';
import "./Nav.css";
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
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact"element={<Contact/>} />
        </Routes>
      </div>
      <img src="https://cdn.pixabay.com/photo/2023/06/09/19/37/letter-8052497_960_720.png" alt="letters and envelopes" />
      
      
      
    </div>
     
    );
}

export default App;
