import React from "react";

const GanttChart = ({ results }) => {
  if (!results || results.length === 0) {
    return null;
  }

  // Calculate total time for the chart
  const totalTime = results[results.length - 1].completionTime;

  return (
    <div className=" mt-9 mx-4 p-4 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-white">Gantt Chart</h2>
      
      {/* Gantt Chart Container */}
      <div className="relative w-full overflow-x-auto bg-gray-900 rounded-md border border-gray-700">
        <div className="flex">
          {results.map((process, index) => {
            const widthPercentage = ((process.burst / totalTime) * 100).toFixed(2);

            return (
              <div
                key={index}
                className="flex items-center justify-center text-center border-r border-gray-700 relative group"
                style={{
                  width: `${widthPercentage}%`,
                  backgroundColor: `hsl(${(index * 60) % 360}, 70%, 60%)`,
                }}
              >
                <div className="p-2 text-sm font-medium text-white">
                  {process.process}
                </div>
                  
              </div>
            );
          })}
        </div>
      </div>

      {/* Time Labels */}
      <div className="flex justify-between text-gray-300 text-xs mt-4">
        {results.map((process, index) => (
          <span
            key={index}
            className="text-center"
            style={{ width: `${((process.burst / totalTime) * 100).toFixed(2)}%` }}
          >
            {process.completionTime}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GanttChart;
