import React from "react";

const TimeQuantumInput = ({ timeQuantum, setTimeQuantum }) => {
  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md text-white">
      <h2 className="text-xl font-bold mb-2">Set Time Quantum</h2>
      <div className="flex items-center gap-4">
        <label htmlFor="timeQuantum" className="text-gray-300">
          Time Quantum:
        </label>
        <input
          id="timeQuantum"
          type="number"
          value={timeQuantum}
          onChange={(e) => setTimeQuantum(parseInt(e.target.value) || 0)}
          className="w-24 p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          min="1"
        />
      </div>
      <p className="text-sm text-gray-400 mt-2">
        * Time Quantum defines how long each process will run in one cycle.
      </p>
    </div>
  );
};

export default TimeQuantumInput;
