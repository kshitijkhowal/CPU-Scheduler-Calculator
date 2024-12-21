import React from "react";

const ResultsTable = ({ results }) => {
  if (!results || results.length === 0) {
    return null;
  }

  // Calculate averages
  const totalCT = results.reduce((sum, r) => sum + (r.completionTime || 0), 0);
  const totalTAT = results.reduce((sum, r) => sum + (r.turnaroundTime || 0), 0);
  const totalWT = results.reduce((sum, r) => sum + (r.waitingTime || 0), 0);

  const averageCT = (totalCT / results.length).toFixed(2);
  const averageTAT = (totalTAT / results.length).toFixed(2);
  const averageWT = (totalWT / results.length).toFixed(2);

  return (
    <div className="overflow-x-auto mt-9 mx-4 p-4 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4 text-white">Scheduling Results</h2>
      <table className="w-full text-sm text-left text-gray-400">
        {/* Table Header */}
        <thead className="text-xs uppercase bg-gray-700 text-gray-300">
          <tr>
            <th scope="col" className="px-6 py-3">Process</th>
            <th scope="col" className="px-6 py-3">Arrival Time</th>
            <th scope="col" className="px-6 py-3">Burst Time</th>
            <th scope="col" className="px-6 py-3">Completion Time</th>
            <th scope="col" className="px-6 py-3">Turnaround Time</th>
            <th scope="col" className="px-6 py-3">Waiting Time</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {results.map((r, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
              } hover:bg-gray-600`}
            >
              <td className="px-6 py-4 font-medium text-white whitespace-nowrap">{r.process}</td>
              <td className="px-6 py-4">{r.arrival}</td>
              <td className="px-6 py-4">{r.burst}</td>
              <td className="px-6 py-4">{r.completionTime}</td>
              <td className="px-6 py-4">{r.turnaroundTime}</td>
              <td className="px-6 py-4">{r.waitingTime}</td>
            </tr>
          ))}
        </tbody>

        {/* Table Footer for Averages */}
        <tfoot>
          <tr className="bg-gray-900 font-bold text-white">
            <td className="px-6 py-4" colSpan="3">Averages</td>
            <td className="px-6 py-4">{averageCT}</td>
            <td className="px-6 py-4">{averageTAT}</td>
            <td className="px-6 py-4">{averageWT}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ResultsTable;
