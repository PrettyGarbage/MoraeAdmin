import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/common/Header";
import MainPage from "./components/MainPage";
import EmptyPage from "./components/EmptyPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="*" element={<EmptyPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
