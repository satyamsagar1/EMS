import React from "react";
import Header from "../others/header";
import TaskListNumbers from "../others/taskkListNumber";
import TaskList from "../Task_list/tasklist";
import Createtask from "../others/Createtask";

const EmployeeDashboard = ({data})=> {
    // console.log(data)
    return(
        <div className="p-10 bg-#icicic h-screen">
            
            <Header data={data}/>
            <TaskListNumbers data={data}/>
            <TaskList data={data} />
            
        </div>
    )
}

export default EmployeeDashboard