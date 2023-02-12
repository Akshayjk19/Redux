import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:0,
}

export const indcfuns = createSlice({
  name: 'new',
  initialState,
  reducers: {
    increm: (state) => {
    state.value=state.value+1;
      
    },
    decre: (state)=>{
        if (state.value<=0)
        {
            alert("You Can't Decrement");
        }else{
            state.value=state.value-1;
            
        }
    },
   
  
  },
})
export const { increm,decre } = indcfuns.actions

export default indcfuns.reducer