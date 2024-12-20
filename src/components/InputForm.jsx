import React,{useState} from 'react'

const InputForm = ({onSubmit}) => {

  const [processes,setProcesses]=useState([
    {arrival:"",burst:"",priority:""}
  ]);

  const addProcess=()=>{
    setProcesses([...processes,{arrival:"",burst:"",priority:""}]);
  }

  const handleChange=(index,field,value)=>{
    const updatedProcesses=[...processes];
    updatedProcesses[index][field]=value;
    setProcesses(updatedProcesses);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    const formattedProcesses=processes.map((p,i)=>({
      id:i+1,
      arrival:parseInt(p.arrival)||0,
      burse:parseInt(p.burst)||0,
      priority:parseInt(p.priority)||0,
    }));
    onSubmit(formattedProcesses);
  }


  return (
    <div className="mt-9">
      
    </div>
  )
}

export default InputForm
