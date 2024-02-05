import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++; // Here you can mutate the state, although Redux make it immutable behind the scenes
    },
    decrement(state) {
      state.counter--;
    },
    increaseBy5(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    }
  }
})

export default counterSlice.reducer;

export const counterActions = counterSlice.actions;
