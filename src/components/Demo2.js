import React,{useState,useEffect} from 'react'

function Demo2(props) {
    const [number, setNumber] = useState(0);
    useEffect(() => {
        console.log("Component Rendered !");
        const interval = setInterval(() => {
            setNumber(prev => prev + 1)
        }, 1000);
        return () =>{
            clearInterval(interval)
        }
    }, []);

  return (
    <div>Number - {number}</div>
  )
}

export default Demo2