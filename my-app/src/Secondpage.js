import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pop } from './Functions';

export function Secondpage() {
const alt=useSelector((state)=> state.alrt.value)
console.log(alt);
const dispatch=useDispatch()

  return (
    <div>
    <div className='text-center'>
    <button
    aria-label="Alert Pop"
    onClick={() => dispatch(pop())}
  >Alert</button> 
  </div>
  <h1>{alt}</h1>
 
    </div>
  )
}

export default Secondpage