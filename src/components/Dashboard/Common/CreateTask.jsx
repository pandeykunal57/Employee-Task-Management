import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthProvider'


const CreateTask = () => {


	const [title, setTaskTitle] = useState('')
	const [description, setTaskDescription] = useState('')
	const [date, setTaskDate] = useState('')
	const [asignTo, setAsignTo] = useState('')
	const [category, setCategory] = useState('')

	const [newTask, setNewTask] = useState({})

     const [userData,setUserData] = useContext (AuthContext)

	 const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({ title, description, date, category, active: false, newTask: true, failed: false, completed: false })

        const data = [...userData]

        data.forEach(function (elem) {
            if (asignTo == elem.name) {
                elem.tasks.push(newTask)
                elem.taskStats.newTask = elem.taskStats.newTask + 1
            }
        })
        setUserData(data)
        console.log(data);

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')

    }
	return (
		<div className='p-5 bg-[#1c1c1c] mt-5 rounded text-white placeholder:text-gray-400'>
			<form onSubmit={(e) => {
				submitHandler(e)
			}} className='flex flex-wrap w-full items-start justify-between'>
				<div className='w-1/2'>
					<div>
						<h3 className='text-md text-gray-300 mb-0.5'>Task Title</h3>
						<input value={title}
							onChange={(e) => {
								setTaskTitle(e.target.value)
							}}
							className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make A Task' />
					</div>
					<div>
						<h3 className='text-md text-gray-300 mb-0.5'>Date</h3>
						<input value={date}
							onChange={(e) => {
								setTaskDate(e.target.value)
							}}
							className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='date' />
					</div>
					<div>
						<h3 className='text-md text-gray-300 mb-0.5'>Assign To</h3>
						<input value={asignTo}
							onChange={(e) => {
								setAsignTo(e.target.value)
							}}
							className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee Name' />
					</div>
					<div>
						<h3 className='text-md text-gray-300 mb-0.5'>Category</h3>
						<input value={category}
							onChange={(e) => {
								setCategory(e.target.value)
							}}
							className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text " placeholder='Design, Development....etc' />
					</div>
				</div>
				<div className='w-1/2'>
					<h3 className='text-md text-gray-300 mb-0.5'>Description</h3>
					<textarea
						value={description}
						onChange={(e) => {
							setTaskDescription(e.target.value)
						}}
						className='w-full h-44 text-sm py-2 px-3 rounded outline-none bg-transparent border-[1px] border-gray-400' placeholder='Description' name="" id="" cols="30" rows="10"></textarea>
					<button className='bg-emerald-500 py-2 hover:bg-emerald-600 px-5 rounded text-lg mt-4 justify-center w-full '>Create task</button>
				</div>





			</form>

		</div>
	)
}

export default CreateTask