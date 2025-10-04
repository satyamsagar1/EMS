import React from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskkListNumber";
import TaskList from "../Task_list/TaskList";

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
