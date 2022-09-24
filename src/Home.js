import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const redirect = useNavigate();
    const logout=()=>{
      localStorage.clear();
      redirect("/login")
    }

   
  return (
    <div>
        <h1 style={{color: "blue", alignItems: "center"}}>Home page</h1>
        <p>testing for git push</p>
        <Link to="/login"><button>login</button></Link>
        <button onClick={logout}>logout</button>
        
    </div>

  )
}

export default Home