
import React, {useState, useContext} from "react";
import { AuthContext } from "../../context/AuthProvider";

const Createtask=({data})=>{

    const {employees,handleAddTask} = useContext(AuthContext)

    const [employeeId, setEmployeeId]= useState("")

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); 
        // console.log('Submitting with employeeId:', employeeId);
        if(!employeeId){
            alert("Please select an employee to assign the task.");
            return;
        }
         const newTaskData = { 
            
            active: false,
            newTask : true,
            completed: false,
            failed: false,
            taskTitle: title,
            category: category,
            taskDate: date,
            taskDescription: description,

        };
        handleAddTask(newTaskData, parseInt(employeeId));
        setTitle("");
        setDate("");
        setCategory("");
        setDescription("");
    };
    // console.log(data)
    return(
        <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
                <form onSubmit={handleSubmit} className=" p-5 flex w-full items-start justify-between">
                    <div className="w-1/2"> 
                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                            <input  className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Make a UI design"
                            value={title}
                            onChange={(e)=>setTitle(e.target.value) } />
                        </div>
                    
                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                            <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="date" 
                            value={date}
                            onChange={(e)=>setDate(e.target.value) } />
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
                            <select
                                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-black border-[1px] border-black-400 mb-4"
                                value={employeeId}
                                onChange={(e) => setEmployeeId(e.target.value)}
                                >

                                <option value="">-- Select an Employee --</option>
                                {employees?.map(employee => (
                                <option key={employee.id} value={employee.id}>
                                {employee.firstName}
                                </option>
                            ))}
                            </select>
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                            <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="design/dev,etc" 
                            value={category}
                            onChange={(e)=>setCategory(e.target.value) } />
                        </div>
                    </div>
                    
            
                    <div className="w-2/5 flex flex-col items-start">
                        <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                        <textarea  className="w-full h-44 text-sm py-2 rounded outline-none bg-transparent border-[1px] border-gray-400"name="" id="" cols="30" rows="10"
                        value={description}
                        onChange={(e)=>setDescription(e.target.value) }></textarea>
                        <button type="submit" className="bg-emerald-500 hover:bg-emerald-700 px-5 rounded text-sm mt-4 h-10 w-full">Create Task</button>
                    </div>
                    
                    
                </form>

            </div>
    )
}

export default Createtask

