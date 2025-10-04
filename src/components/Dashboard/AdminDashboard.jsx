import React from "react";
import Header from "../others/Header";
import Createtask from "../others/Createtask";
import AllTask from "../others/AllTask";
import { use } from "react";

const AdminDashboard= ({data})=> {
    return(
        <div className="h-screen w-full p-10">
            <Header data={data}/>
            <Createtask data={data}/>
            <AllTask data={data}/>
            
            
            
        </div>
    )
}

export default AdminDashboard
