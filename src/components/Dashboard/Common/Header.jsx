import React from 'react'

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  const displayName = props.name && props.name.trim() !== '' ? props.name : 'ADMIN'

  return (
    <div className='flex items-end justify-between text-white'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-4xl font-semibold'>{displayName} 👋🏻</span>
      </h1>
      <button onClick={logOutUser} className='bg-red-600 hover:bg-red-700 hover:shadow-red-400 hover:cursor-pointer shadow-xs text-lg font-medium text-white rounded-lg px-5 py-2'>
        Log Out
      </button>
    </div>
  )
}

export default Header
