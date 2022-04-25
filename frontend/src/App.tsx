import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import TodoMainPage from "./pages/TodoMainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TodoDetailsPage from "./pages/TodoDetailsPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<TodoMainPage/>}/>
          <Route path={"/:id"} element={<TodoDetailsPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
