import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider'

const AllTasks = () => {

    const [userData,setUserData] = useContext(AuthContext)
    return (
        <div className='bg-[#1c1c1c]  rounded p-6 mt-5  text-white '>
            <div className=' border-gray-600 text-lg border-3 rounded mb-2 py-2 px-4 flex justify-between'>
                <h2 className='w-1/5 font-bold'>Emp Name</h2>
                <h3 className='w-1/5 font-bold text-blue-500'>New Task</h3>
                <h5 className='w-1/5 font-bold text-yellow-600'>Active Task</h5>
                <h5 className='w-1/5 font-bold text-green-600'>Completed</h5>
                <h5 className='w-1/5 font-bold text-red-600'>Failed</h5>
            </div>
            <div id='alltask' className='  overflow-auto'>
                {userData.map(function (elem,idx) {
                    return <div key={idx} className='border-gray-600 border-3 rounded mb-2 py-2 px-4 flex justify-between'>
                        <h3  className='w-1/5 text-lg font-medium text-white'>{elem.name}</h3>
                        <h2  className='w-1/5 text-lg font-medium text-blue-500'>{elem.taskStats.newTask}</h2>
                        <h5  className='w-1/5 text-lg font-medium text-yellow-600'>{elem.taskStats.active}</h5>
                        <h5  className='w-1/5 text-lg font-medium text-green-600'>{elem.taskStats.completed}</h5>
                        <h5  className='w-1/5 text-lg font-medium text-red-600'>{elem.taskStats.failed}</h5>
                    </div>
                })}
            </div> 
        </div>
    )
}

export default AllTasks