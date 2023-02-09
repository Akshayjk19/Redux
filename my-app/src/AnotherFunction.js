import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Checking, incre } from './AnotherSlice';

function AnotherFunction() {
    const values= useSelector((state)=>state.Checks)
    console.log(values);
    const disp=useDispatch()

  return (
    <div>
    <h1>{values.value}</h1>
    <button onClick={()=>disp(incre())}>Increment</button>
    <button onClick={()=>disp(Checking())}>Check</button>
    <h1>{values.ck}</h1>
    
    </div>
  )
}

export default AnotherFunction