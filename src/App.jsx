import React from "react";
import {BrowserRouter, Routes, Route} from "react-router";
import HomeScreen from "./pages/HomeScreen.jsx";
import FCFSPage from "./pages/FCFSPage.jsx";
import SJFPage from "./pages/SJFPage.jsx";
import RoundRobin from "./pages/RoundRobin.jsx";
import PriorityPage from "./pages/PriorityPage.jsx";
import SRTFPage from "./pages/SRTFPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/fcfs" element={<FCFSPage/>}/>
        <Route path="/sjf" element={<SJFPage/>}/>
        <Route path="/round-robin" element={<RoundRobin/>}/>
        <Route path="/priority" element={<PriorityPage/>}/>
        <Route path="/srtf" element={<SRTFPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}