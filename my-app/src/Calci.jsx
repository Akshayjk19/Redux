import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, divi, multi, sub } from './Calculations'

 function Calci() {
const cal=useSelector((state)=>state.calc.result)
const dispatch=useDispatch()

  return (
    <div>
    <h1>{cal}</h1>
    <button onClick={()=>dispatch(add())}>Addition</button>
    <button onClick={()=>dispatch(sub())}>Substraction</button>
    <button onClick={()=>dispatch(multi())}>Multiplication</button>
    <button onClick={()=>dispatch(divi())}>Division</button>
    </div>
  )
}

export default Calci