import React, { useState } from 'react';

const Login = ({handleLogin}) => {


    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const SubmitHandler= (e)=>{
        
        e.preventDefault()
        handleLogin(email,password)
        // console.log("email is",email)
        // console.log("password is",password)

        setEmail("")
        setPassword("")

    }



    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="bg-black border-2 border-green-300 p-4 rounded-md shadow-lg">
                <form onSubmit={(e)=>{
                    SubmitHandler(e)
                }}
                className=" flex flex-col gap-4">
                    
                    <input 
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        required
                        type="email" 
                        placeholder="Enter your Email" 
                        className=" outline-none border-2 bg-black border-green-300 p-2 rounded-full "
                    />
                    <input 
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        type="password" 
                        placeholder="Enter your Password" 
                        className=" outline-none border-2 bg-black border-green-300 p-2 rounded-full "
                    />
                    <button 
                        type="submit" 
                        className="bg-green-300 text-white py-2 px-4 rounded-full hover:bg-green-600"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
