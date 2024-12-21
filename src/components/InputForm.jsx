import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Check } from 'lucide-react';
import { Trash2 } from 'lucide-react';



const InputForm = ({ onSubmit }) => {
  const [processes, setProcesses] = useState([
    { arrival: "", burst: "", priority: "" }
  ]);

  // Add a new empty process
  const addProcess = () => {
    setProcesses([...processes, { arrival: "", burst: "", priority: "" }]);
  };

  // Remove a specific process
  const removeProcess = (index) => {
    const updatedProcesses = processes.filter((_, i) => i !== index);
    setProcesses(updatedProcesses);
  };

  // Handle input changes
  const handleChange = (index, field, value) => {
    const updatedProcesses = [...processes];
    updatedProcesses[index][field] = value;
    setProcesses(updatedProcesses);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedProcesses = processes.map((p, i) => ({
      id: i + 1,
      arrival: parseInt(p.arrival) || 0,
      burst: parseInt(p.burst) || 0,
      priority: parseInt(p.priority) || 0,
    }));
    onSubmit(formattedProcesses);
  };

  return (
    <div className="mt-9 mx-4 p-4 bg-gray-950 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Input your Processes Here</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 px-8">
          {processes.map((p, i) => (
            <div key={i} className="flex flex-wrap gap-4 justify-between items-center">
              <span className="font-semibold">Process {i + 1}</span>
              <div className="flex flex-wrap gap-4">
                <input
                  type="number"
                  placeholder="Arrival Time"
                  value={p.arrival}
                  onChange={(e) => handleChange(i, "arrival", e.target.value)}
                  className="w-32 p-2 rounded bg-gray-700 text-white focus:outline-none"
                />
                <input
                  type="number"
                  placeholder="Burst Time"
                  value={p.burst}
                  onChange={(e) => handleChange(i, "burst", e.target.value)}
                  className="w-32 p-2 rounded bg-gray-700 text-white focus:outline-none"
                />
                <input
                  type="number"
                  placeholder="Priority"
                  value={p.priority}
                  onChange={(e) => handleChange(i, "priority", e.target.value)}
                  className="w-32 p-2 rounded bg-gray-700 text-white focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => removeProcess(i)}
                  className="px-3 py-1 text-sm font-semibold rounded-xl border-2 bg-red-600 hover:bg-red-800 transition duration-300"
                >
                  <Trash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-start gap-4">
          <button
            type="button"
            onClick={addProcess}
            className="px-4 py-2 text-xl flex font-semibold border-2 rounded-xl bg-black hover:bg-gray-700 hover:scale-105 transition-transform duration-300 shadow-lg text-white"
          >
            <Plus />
            Add Process
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-xl flex font-semibold border-2 rounded-xl bg-black hover:bg-gray-700 hover:scale-105 transition-transform duration-300 shadow-lg text-white"
          >
            <Check />
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
