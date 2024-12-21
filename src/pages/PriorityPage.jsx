import React, { useState } from 'react'
import Navbar from "../components/Navbar.jsx";
import InputForm from '../components/InputForm.jsx';
import Footer from "../components/Footer.jsx"
import { priority } from '../algorithms/PriorityAlgo.js';
import ResultsTable from '../components/ResultTable.jsx';
import GanttChart from '../components/GanttChart.jsx';

const PriorityPage = () => {

  const [result,setResult]=useState([]);

  const handleFormSubmit=(processes)=>{
    // console.log("submitted Processes",processes);
    const output=priority(processes);
    setResult(output);
    console.log(result);
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">

      
      <Navbar title="Priority Algorithm"/>


      <main className="flex-grow">
      {/* submit form */}
      <InputForm onSubmit={handleFormSubmit}/>
      {/* Result Table */}
      <ResultsTable results={result} />
      {/* Gant Chart */}
      {/* <GanttChart results={result} /> */}


      </main>


      <Footer/>
      
    </div>
  )
}

export default PriorityPage