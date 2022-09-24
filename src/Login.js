import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const [input, setInputs] = useState({});
    
    const handleChange =(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values=>({...values, [name]: value}))
    }
    
        const navigate = useNavigate();
        
        const handleSubmit=(e)=>{
            e.preventDefault();
            if (Object.entries(input).length !==2 || input.name === " " || input.password === " ")
            {
                alert("Username and password cannot be empty");
                return false
            }
            // navigate("/Details", {state: input })
            localStorage.setItem('login', true);
            localStorage.setItem('userDetails', JSON.stringify(input))
            navigate('/')
        }

        // const login=()=>{
        //     localStorage.setItem('login', true);
        //     navigate('/')
        // }

        // const redirect = useNavigate();
            useEffect(() => {
                let login = localStorage.getItem('login');
                if (login){
                    navigate('/')
                }
            });
  return (
    <div>
        <h1>login page</h1>

        <form onSubmit={handleSubmit}>
            {console.log(input)}
            <input type="text" name="name" value={input.name} placeholder="Username" onChange={handleChange}/>
            <input type="password" name="password" value={input.password || ""}placeholder="Password" onChange={handleChange}/>
            <button type="submit" >submit</button>
        </form>
        <Link to="/"><button >Go Home</button></Link>
        <Link to="/Details"><button >Details</button></Link>
        
       
    </div>
  )
}

export default Login