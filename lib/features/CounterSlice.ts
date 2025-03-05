import { createSlice } from "@reduxjs/toolkit";

interface Counter{
    value: number;
}
const initialState: Counter = {
    value: 0
}

const counterslice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      if(state.value>0){
        state.value -= 1;
      }
    },
    reset(state) {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterslice.actions;
export default counterslice.reducer;