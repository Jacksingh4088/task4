import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Protect(props) {
    const {Component} = props;
    const redirect = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem('login');
        if (!login){
            redirect('/login')
        }
    });
  return (
    <div>
        <Component/>
    </div>
  )
}

export default Protect