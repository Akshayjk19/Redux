import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Slice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  console.log(count);
  const dispatch = useDispatch()

  return (
    <div>
      <div className='text-center'>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}