import React from 'react'

const NewTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5'>
      <div className='flex justify-between  items-center'>
        <h3 className='bg-gray-600 px-3 text-xs py-1 rounded-md font-bold'>{data.category}</h3>
        <h4 className='font-bold text-sm'>{data.date}</h4>
      </div>
      <h2 className='text-3xl mt-4 font-semibold'>{data.title}</h2>
      <p className='mt-2 '>{data.description}</p>
      <div className='mt-10'>
        <button className='bg-green-500 px-3 py-2 rounded text-xs font-medium'>ACCEPT TASK</button>

      </div>
    </div>
  )
}

export default NewTask