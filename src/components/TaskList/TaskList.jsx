import React from 'react'
import AcceptTask from './AcceptTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'

const TaskList = ({ data }) => {
    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto w-full flex flex-nowrap items-center justify-start gap-5 py-5 mt-10'>
            {data?.tasks?.map((elem, idx) => {
                console.log("Task", idx, elem); // Debug

                if (elem.newTask) return <NewTask key={idx} data={elem} />;
                if (elem.active) return <AcceptTask key={idx} data={elem}/>;
                if (elem.completed) return <CompleteTask key={idx} data={elem}/>;
                if (elem.failed) return <FailedTask key={idx} data={elem}/>;
                return null;
            })}
        </div>
    )
}

export default TaskList
