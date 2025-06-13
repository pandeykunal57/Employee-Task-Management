import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto w-full flex flex-nowrap items-center justify-start gap-5 py-5 mt-10'>
        
        {data.tasks.map((elem)=>{
            if(elem.active){
                return <AcceptTask/>

            }

            if(elem.newTask)
            {
                return <NewTask/>
            }
             if(elem.completed){
                return <CompleteTask/>

            }

            if(elem.failed)
            {
                return <FailedTask/>
            }
        })}
        
        <AcceptTask/>
        <NewTask/>
        <CompleteTask/>
        <FailedTask/>


       

       
      
    </div>
  )
}

export default TaskList