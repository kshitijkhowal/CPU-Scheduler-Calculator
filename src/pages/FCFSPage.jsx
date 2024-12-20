import React from 'react'
import Navbar from "../components/Navbar.jsx";
import InputForm from '../components/InputForm.jsx';

const FCFSPage = () => {

  const handleFormSubmit=(processes)=>{
    console.log("submitted Processes",processes)
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar title="First Come First Serve Algorithm (FCFS)"/>

      {/* submit form */}
      <InputForm onSubmit={handleFormSubmit}/>
      
    </div>
  )
}

export default FCFSPage
