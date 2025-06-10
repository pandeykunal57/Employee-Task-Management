import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
				<form  className='flex flex-wrap w-full items-start justify-between'>
					<div className='w-1/2'>
						<div>
						<h3 className='text-md text-gray-300 mb-0.5'>Task Title</h3>
						<input className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make A taks' />
						</div>
						<div>
							<h3 className='text-md text-gray-300 mb-0.5'>Date</h3>
							<input className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='date' />
						</div>
						<div>
							<h3 className='text-md text-gray-300 mb-0.5'>Assign To</h3>
							<input className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='emplooyee name' />
						</div>
						<div>
							<h3 className='text-md text-gray-300 mb-0.5'>Category</h3>
							<input className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text " placeholder='Design Development' />
						</div>
					</div>
					<div className='w-1/2'>
						<h3 className='text-md text-gray-300 mb-0.5'>Description</h3>
						<textarea className='w-full h-44 text-sm py-2 px-3 rounded outline-none bg-transparent border-[1px] border-gray-400' placeholder='Description' name="" id="" cols="30" rows="10"></textarea>
						<button className='bg-emerald-500 py-2 hover:bg-emerald-600 px-5 rounded text-lg mt-4 justify-center w-full '>Create task</button>
					</div>
					
						
					
					

				</form>

			</div>
  )
}

export default CreateTask