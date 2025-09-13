import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../Utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null); // Fixed typo

    useEffect(() => {
        const { employees, admin } = getLocalStorage();
        if (employees || admin) {
            setUserData({ employees, admin });
        } else {
            setUserData(null);
        }
        // console.log({ employees, admin });
    }, []);

    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;