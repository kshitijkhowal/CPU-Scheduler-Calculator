import React from "react";
import {BrowserRouter, Routes, Route} from "react-router";
import HomeScreen from "./pages/HomeScreen.jsx";
import FCFSPage from "./pages/FCFSPage.jsx";
import SJFPage from "./pages/SJFPage.jsx";
import RoundRobin from "./pages/RoundRobin.jsx";
import PriorityPage from "./pages/PriorityPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/fcfs" element={<FCFSPage/>}/>
        <Route path="/sjf" element={<SJFPage/>}/>
        <Route path="/round-robin" element={<PriorityPage/>}/>
        <Route path="/priority" element={<RoundRobin/>}/>
      </Routes>
    </BrowserRouter>
  )
}