import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/common/Header";
import MainPage from "./components/MainPage";
import EmptyPage from "./components/EmptyPage";
import MonsterPage from "./components/MonsterPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="*" element={<EmptyPage/>} />
          <Route path="/monster_list" element={<MonsterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
