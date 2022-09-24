import React,{useState} from 'react'
import Demo2 from './Demo2';

function Demo1() {

    const [show,setShow] = useState(true);

    const display = () =>{
        setShow(!show);
    }

  return (
    <div>
        <button onClick={display}>Toggle</button> 
        {show && <Demo2 />}
    </div>
  )
}

export default Demo1