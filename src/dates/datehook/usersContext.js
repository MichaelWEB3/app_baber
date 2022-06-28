import React, { createContext, useEffect, useState } from "react";
const UserContext = createContext({})

export function UserProvider(props) {

    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)

    return (
        <UserContext.Provider value={{
            token,
            setToken,
            user,
            setUser
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext