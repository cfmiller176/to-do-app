import { useState } from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from './components/TodoList';
import NavBar from './components/NavBar';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom"



function App() {

  return (
    <div className = "to-do-app">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
      <TodoList />
      
    </div>
     
    );
}

export default App;
