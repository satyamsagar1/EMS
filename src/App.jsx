import React, {  useContext, useEffect,useState } from 'react';
import Login from './components/Auth/login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage,setLocalStorage } from './Utils/localStorage';
import { AuthContext } from './context/AuthProvider';


const App = (e) => {

    // localStorage.clear()



    const [user, setUser]= useState(null)
    const[loggedInUserData , setloggedInUserData] = useState(null)
    const authdata = useContext(AuthContext)

    useEffect(()=>{
        setLocalStorage()
        const loggedInUser =localStorage.getItem('loggedInUser')
        if(loggedInUser){
            const userData =JSON.parse(loggedInUser)
            setUser(userData.role)
            setloggedInUserData(userData.data)
        }
    },[])  




    const handleLogin =(email,password)=>{
        const admin =authdata.admin && authdata.admin.find((e)=>e.email==email && e.password == password)
         if(admin){
            setUser('admin')
            setloggedInUserData(admin)
            localStorage.setItem('loggedInUser',JSON.stringify({role:'admin', data:admin}))
         }else if(authdata){
            const employee =authdata.employees && authdata.employees.find((e)=>e.email==email && e.password == password)
            if(employee){
            setUser('employee')
            setloggedInUserData(employee)
            localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data: employee}))}
         }
         else{
            alert("invalid credential")
         }
    }

      
        
   
   

    return (
        <>
            {!user ? <Login handleLogin={handleLogin}/>: ''}
            {user == 'admin' ? <AdminDashboard data={loggedInUserData} />: null } 
            {user == 'employee' ?<EmployeeDashboard data={loggedInUserData}/> : null }
            {/* <EmployeeDashboard data={loggedInUserData}/> */}
        
        </>
    );
};

export default App;
