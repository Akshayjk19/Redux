import { configureStore } from '@reduxjs/toolkit'
import  check  from './AnotherSlice'
import calcu from './Calculations'
import  funcs  from './Functions'
import  indcfuns  from './FunctionsInDc'
import  counterSlice from './Slice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    alrt: funcs,
    calc:calcu,
    Checks:check,
    values:indcfuns,
  },
})