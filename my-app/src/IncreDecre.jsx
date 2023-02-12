import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decre, increm } from './FunctionsInDc'

function IncreDecre() {
    const val=useSelector((state)=>state.values.value)
    const disp=useDispatch()
  return (
    <div>
    <h1>{val}</h1>
    <button onClick={()=>disp(increm())}>Increment</button>
    <button onClick={()=>disp(decre())}>Decrement</button>
    
    </div>
  )
}

export default IncreDecre