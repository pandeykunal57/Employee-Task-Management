import React from 'react'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto w-full flex flex-nowrap items-center justify-start gap-5 py-5 mt-10'>
        <div className='flex-shrink-0 h-full w-[300px] bg-gray-400 rounded-xl p-5'>
        <div className='flex justify-between  items-center'>
            <h3 className='bg-red-600 px-3 text-xs py-1 rounded-md font-bold'>High</h3>
            <h4 className='font-bold text-sm'>9 June 2025</h4>
        </div>
        <h2 className='text-3xl mt-4 font-semibold'>TASK 1</h2>
        <p className='mt-2 '>kjasdgcfku ajsckua kjasdcfk kjadsc ladjc dgu kadjfbakdfgk</p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] bg-cyan-400 rounded-xl p-5'>
        <div className='flex justify-between  items-center'>
            <h3 className='bg-green-600 px-3 text-xs py-1 rounded-md font-bold'>low</h3>
            <h4 className='font-bold text-sm'>9 June 2025</h4>
        </div>
        <h2 className='text-3xl mt-4 font-semibold'>TASK 1</h2>
        <p className='mt-2 '>kjasdgcfku ajsckua kjasdcfk kjadsc ladjc dgu kadjfbakdfgk</p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] bg-lime-400 rounded-xl p-5'>
        <div className='flex justify-between  items-center'>
            <h3 className='bg-yellow-500 px-3 text-xs py-1 rounded-md font-bold'>Med</h3>
            <h4 className='font-bold text-sm'>9 June 2025</h4>
        </div>
        <h2 className='text-3xl mt-4 font-semibold'>TASK 1</h2>
        <p className='mt-2 '>kjasdgcfku ajsckua kjasdcfk kjadsc ladjc dgu kadjfbakdfgk</p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] bg-purple-400 rounded-xl p-5'>
        <div className='flex justify-between  items-center'>
            <h3 className='bg-red-600 px-3 text-xs py-1 rounded-md font-bold'>High</h3>
            <h4 className='font-bold text-sm'>9 June 2025</h4>
        </div>
        <h2 className='text-3xl mt-4 font-semibold'>TASK 1</h2>
        <p className='mt-2 '>kjasdgcfku ajsckua kjasdcfk kjadsc ladjc dgu kadjfbakdfgk</p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] bg-pink-400 rounded-xl p-5'>
        <div className='flex justify-between  items-center'>
            <h3 className='bg-red-600 px-3 text-xs py-1 rounded-md font-bold'>High</h3>
            <h4 className='font-bold text-sm'>9 June 2025</h4>
        </div>
        <h2 className='text-3xl mt-4 font-semibold'>TASK 1</h2>
        <p className='mt-2 '>kjasdgcfku ajsckua kjasdcfk kjadsc ladjc dgu kadjfbakdfgk</p>
        </div>
      
    </div>
  )
}

export default TaskList