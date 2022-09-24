import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Details = () => {
    const [user, setUser] = useState({})
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);
    
    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem('userDetails')))
      console.log("hello i am details.js")
      // if(location.state===null){
      //   navigate('/login')
      // }
      // console.log(user)
    },[]);
    const showDetails=()=>{
      // const {name, password}=location.state
      if(location.state!==null){
        const {name, password}=location.state
        return(
          <>
            <h3>{name}</h3>
            <h3>{password}</h3>
          </>
        )
      }
    }
    console.log(location.state);
  return (
    <div>
        <h1>welcome</h1>
        <h3>Your Login Details</h3>
        {/* {showDetails()} */}
            <h3>{user?.name}</h3>
            <h3>{user?.password}</h3>

        {/* <h3>{name}</h3>
        <h3>{password}</h3> */}

        <Link to="/login"><button>Go back to login page</button></Link>
    </div>
  )
}

export default Details