import { useState } from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from './components/TodoList';
import NavBar from './components/NavBar';
import About from './pages/About';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import "./Contact.css";





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
      <TodoList />
      
      
    </div>
     
    );
}

export default App;
