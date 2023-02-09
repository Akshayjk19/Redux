import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'Hello',
}

export const funcs = createSlice({
  name: 'new',
  initialState,
  reducers: {
    pop: (state) => {
      alert(state.value);
    },
  
  },
})


export const { pop } = funcs.actions

export default funcs.reducer