export const RoundRobin = (processes, timeQuantum) => {
    // Create a deep copy to avoid modifying the original array
    let copyProcesses = processes.map(p => ({ ...p, remainingBurst: p.burst }));
    let time = 0; // Tracks the current CPU time
    let results = [];
    let queue = []; // Ready Queue
    let visited = new Set(); // Track visited processes
    let completedProcesses = 0;

    // console.log("Initial Processes:", processes);

    while (completedProcesses < processes.length) {
        // Add processes to the queue based on arrival time
        for (let i = 0; i < copyProcesses.length; i++) {
            if (
                copyProcesses[i].arrival <= time &&
                !visited.has(i) &&
                copyProcesses[i].remainingBurst > 0
            ) {
                queue.push(i);
                visited.add(i); // Mark the process as visited
            }
        }

        if (queue.length === 0) {
            // If no process is available, increment time
            time++;
            continue;
        }

        // Dequeue the first process
        let current = queue.shift();

        // Execute the process for either timeQuantum or remainingBurst, whichever is smaller
        let executionTime = Math.min(timeQuantum, copyProcesses[current].remainingBurst);
        copyProcesses[current].remainingBurst -= executionTime;
        time += executionTime;

        // Add new processes to the queue while this process was executing
        for (let i = 0; i < copyProcesses.length; i++) {
            if (
                copyProcesses[i].arrival <= time &&
                !visited.has(i) &&
                copyProcesses[i].remainingBurst > 0
            ) {
                queue.push(i);
                visited.add(i);
            }
        }

        // If the process is not finished, push it back to the queue
        if (copyProcesses[current].remainingBurst > 0) {
            queue.push(current);
        } else {
            // Process completed
                completedProcesses++;
                const completionTime = time;
                const turnaroundTime = completionTime - processes[current].arrival;
                const waitingTime = turnaroundTime - processes[current].burst;

                results.push({
                    process: `P${processes[current].id || current + 1}`,
                    arrival: processes[current].arrival,
                    burst: processes[current].burst,
                    completionTime,
                    turnaroundTime,
                    waitingTime,
                    temp:processes[current].id,
            });
        }
    }
    results.sort((a,b)=>(a.temp-b.temp));
    // console.log("Round Robin Results:", results);
    return results;
};