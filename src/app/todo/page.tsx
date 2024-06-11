"use client"
import React, { useState } from 'react';
interface Task {
    task:string,
    details:string;
}

function ToDo() {


    let [task,setTask]= useState("");
    let[details, setDetails] = useState("");
    let[mainTask, setmainTask]= useState<Task[]>([]);


    function taskHandler(e :any){
        e.preventDefault();
        setTask("");
        setDetails("");
        setmainTask([...mainTask,{task,details}])

    }
    let savedTasks: any = (
        
    <div className='font-bold pt-10 text-center text-6xl'> No Task Available</div> )


    function deleteHandler(e:any){
        let copyMainTask = [...mainTask];
        copyMainTask.splice(e, 1);
        setmainTask(copyMainTask);
    
        
    }
    if(mainTask.length > 0){
        savedTasks = mainTask.map((e ,index)=>{

            return(
            <div
            key={index}
             className=' bg-gradient-to-br from-purple-500 to-green-500 flex justify-around py-2 flex-col items-center  mb-1 lg:flex-row gap-4'>
                <h1 className='lg:w-1/4 text-wrap  text-start font-bold'>{e.task}</h1>
                <h1 className='lg:w-1/2 text-wrap  text-start font-bold '>{e. details}</h1>
                <button onClick={deleteHandler} className='bg-red-500 lg:w-1/4 hover:bg-red-700 text-white p-1'>
                   Delete</button>

                

            </div>
            );
        });
    }
        
    
  return (
    <div className='mainBg min-h-[calc(100vh-60px)] px-4 py-1'>
        <div className='w-full h-full flex flex-col'>
            <h1 className='bg-white lg:text-3xl text-black font-bold text-centertext-sm p-1'>My Todo List</h1>

            <form className='flex flex-col lg:flex-row gap-2 py-4'>
                <input className='text-sm lg:text-2xl  border-green-900 border-2 outline-none rounded p-1' type="text" placeholder='Enter Task Here ' value={task} onChange={(e)=>{setTask(e.target.value)}}/>

                <input className='text-sm lg:text-2xl  border-green-900 border-2 outline-none rounded p-1'type="text" placeholder='Enter Details here'
                value={details}onChange={(e)=>{setDetails(e.target.value)}} />

                <button onClick={taskHandler}
                className=' bg-blue-800 text-whitep-1 text-sm font-bold lg:text-2xl rounded hover:bg-blue-900'>Add Task</button>
            </form>
            <div>{savedTasks}</div>
        </div>

    </div>
    
  );

}

export default ToDo;