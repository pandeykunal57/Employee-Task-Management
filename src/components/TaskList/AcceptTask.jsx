import React from 'react'

const AcceptTask = () => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] bg-gray-400 rounded-xl p-5'>
            <div className='flex justify-between  items-center'>
                <h3 className='bg-red-600 px-3 text-xs py-1 rounded-md font-bold'>High</h3>
                <h4 className='font-bold text-sm'>9 June 2025</h4>
            </div>
            <h2 className='text-3xl mt-4 font-semibold'>TASK 1</h2>
            <p className='mt-2 '>kjasdgcfku ajsckua kjasdcfk kjadsc ladjc dgu kadjfbakdfgk</p>
            <div className='flex justify-between mt-10'>
                <button className='bg-green-500 px-3 py-2 rounded text-xs font-medium'>COMPLETED</button>
                <button className='bg-red-500 px-3 py-2 rounded text-xs font-medium'>FAILED</button>
            </div>
        </div>
    )
}

export default AcceptTask