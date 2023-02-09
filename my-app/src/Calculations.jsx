import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Num1: 5,
  Num2:5,
  result:0,

}

export const calcu = createSlice({
  name: 'new',
  initialState,
  reducers: {
    add: (state) => {
    state.result=state.Num1 + state.Num2;
      
    },
    sub: (state)=>{
        state.result=state.Num1-state.Num2;
    },
    multi:(state)=>{
        state.result=state.Num1*state.Num2;
    },
    divi:(state)=>{
        state.result=state.Num1/state.Num2;
    },
  
  },
})
export const { add,sub,multi,divi } = calcu.actions

export default calcu.reducer