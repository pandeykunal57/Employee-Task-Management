import React, { useState } from 'react'

const Header = ({data}) => {
  // const [username, setUsername] = useState('')


  // if(!data)
  // {
  //   setUsername('Admin')
  // }else
  // {
  //   setUsername(data.name)
  // }

  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')
    window.location.reload()
  }
  return (
    <div className='flex items-end justify-between '>
      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-4xl font-semibold'>username👋🏻 </span></h1>
      <button onClick={logOutUser} className='bg-red-600 hover:bg-red-700 hover:shadow-red-400 hover:cursor-pointer shadow-xs text-lg font-medium text-white rounded-lg px-5 py-2'> Log Out</button>
      </div>
  )
}

export default Header