/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from 'react'
import { getLocaStorage, setLocaStorage } from '../Utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    // localStorage.clear()
    const [userData, setUserData] = useState(null)
    useEffect(() => {
        setLocaStorage()
        const { employees, Admin } = getLocaStorage()
        setUserData({ employees, Admin })


    }, [])

    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider