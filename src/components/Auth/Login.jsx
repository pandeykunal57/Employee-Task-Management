import React, { useState } from 'react'


const Login = ({ handleLogin }) => {
    const [Password, setPassword] = useState('')
    const [Email, setEmail] = useState('')

    const SubmitHandler = (e) => {
        e.preventDefault()
        handleLogin(Email, Password)
        setEmail("")
        setPassword("")


    }
    return (
        <div className='flex items-center justify-center h-screen w-screen text-white placeholder:text-gray-400'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl' >
                <form onSubmit={(e) => {
                    SubmitHandler(e)

                }}
                    className='flex flex-col items-center justify-center '>
                    <input required value={Email} onChange={(e) => setEmail(e.target.value)}
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter Your Email' />
                    <input required value={Password} onChange={(e) => setPassword(e.target.value)}
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 mt-3' type="password" placeholder='Enter Your Password' />
                    <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login