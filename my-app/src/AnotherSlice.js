import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  ck:'',
}

export const check = createSlice({
  name: 'new',
  initialState,
  reducers: {
    incre: (state) => {
      state.value=state.value+1;
    },
    Checking: (state)=>{
      if(state.value%2==0){
        state.ck='Even';
      }else{
       state.ck='Odd';
      }
    },
  
  },
})


export const { Checking,incre } = check.actions

export default check.reducer