// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
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

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter
//       }
//     case 'INCREASEBY5':
//       return {
//         counter: state.counter + action.amount,
//         showCounter: state.showCounter
//       }
//     case 'DECREMENT':
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter
//       }
//     case 'TOGGLE':
//       return {
//         counter: state.counter,
//         showCounter: !state.showCounter
//       }
//     default:
//       return state;
//   }
// }

// const store = createStore(counterReducer);

const store = configureStore({
  reducer: counterSlice.reducer
  // reducer: { counter: counterSlice.reducer, showCounter: counterSlice.reducer } // example of many reducers
});

export const counterActions = counterSlice.actions;

export default store;
