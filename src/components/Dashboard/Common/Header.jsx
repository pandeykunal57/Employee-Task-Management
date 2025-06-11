import React from 'react'

const Header = ({data}) => {
  return (
    <div className='flex items-end justify-between '>
      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-4xl font-semibold'>{data.name}👋🏻 </span></h1>
      <button className='bg-red-600 text-lg font-medium text-white rounded-lg px-5 py-2'> Log Out</button>
      </div>
  )
}

export default Header