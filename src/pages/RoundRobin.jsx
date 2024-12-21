import React, { useState } from 'react'
import Navbar from "../components/Navbar.jsx";
import InputForm from '../components/InputForm.jsx';
import Footer from "../components/Footer.jsx"
import { RoundRobin } from '../algorithms/RoundRobinAlgo.js';
import ResultsTable from '../components/ResultTable.jsx';
import GanttChart from '../components/GanttChart.jsx';
import TimeQuantumInput from '../components/TimeQuantumInput.jsx';

const RoundRobinPage = () => {

  const [result,setResult]=useState([]);
  const [timeQuantum, setTimeQuantum] = useState(2);

  const handleFormSubmit = (processes) => {
    if (timeQuantum < 1) {
      alert("Time Quantum must be at least 1!");
      return;
    }
    const output = RoundRobin(processes, timeQuantum);
    setResult(output);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">

      
      <Navbar title="Shortest Remaining Time First (RoundRobin)"/>


      <main className="flex-grow">
      {/* submit form */}
      <div className="w-full flex flex-row">
      <div className="flex-grow">
      <InputForm onSubmit={handleFormSubmit} />
      </div>
      <TimeQuantumInput timeQuantum={timeQuantum} setTimeQuantum={setTimeQuantum}/>
      </div>

      {/* Result Table */}
      <ResultsTable results={result} />
      {/* Gant Chart */}


      </main>


      <Footer/>
      
    </div>
  )
}

export default RoundRobinPage
