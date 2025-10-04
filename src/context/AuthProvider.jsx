import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage,employees as initialData } from "../Utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null); 
    const [employees, setEmployees] = useState(null);

    useEffect(() => {
        const storedData = getLocalStorage();
        if(storedData.employees && storedData.employees.length > 0){
            setEmployees(storedData.employees);
            setAdmin(storedData.admin);
        }
        else{
            localStorage.setItem('employees', JSON.stringify(initialData));
            setEmployees(initialData);
        }
    }, []);
    
    const handleAddTask = (newTaskData, id) => {
        // console.log("Adding task for employee ID:", id);
        const updatedEmployees = employees.map((emp) => {
            if (emp.id === id) {
                return {
                    ...emp,
                    tasks: [...emp.tasks, newTaskData], 
                    taskCounts: {
                        ...emp.taskCounts,
                        newTask: emp.taskCounts.newTask + 1
                    }
                };
            }
            return emp;
        });
        setEmployees(updatedEmployees);
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
        console.log("Task added successfully");
        // console.log(updatedEmployees);
    }

    const authContextvalue = React.useMemo(() => ({
        admin,
        employees,
        handleAddTask
    }), [admin, employees]);
    
    return (
        <AuthContext.Provider value={authContextvalue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;