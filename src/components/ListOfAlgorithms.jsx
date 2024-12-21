import React from 'react'
import { Link } from 'react-router';

const ListOfAlgorithms = () => {

    const algorithms = [
        { name: "First Come First Serve (FCFS)", path: "/fcfs" },
        { name: "Shortest Job First (SJF)", path: "/sjf" },
        { name: "Priority Scheduling", path: "/priority" },
        { name: "Shortest Remaining Time First (SRTF)", path: "/srtf" },
        { name: "Round Robin", path: "/round-robin" },
    ];

    return (
        <div className="container mx-auto my-4">
            <div className="flex flex-col items-center gap-4">
                {algorithms.map((algo,index)=>(
                    <Link 
                        to={algo.path}
                        key={index}
                        className="w-64 h-20 flex items-center justify-center text-center 
                       text-xl font-semibold border-4 rounded-xl 
                       bg-black hover:bg-gray-700 hover:scale-105 
                       transition-transform duration-300 shadow-lg text-white"
                    >
                        {algo.name}
                    </Link>
                ))}
            </div>
            
        </div>
    )
}

export default ListOfAlgorithms
