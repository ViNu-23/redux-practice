import { createSlice } from "@reduxjs/toolkit";

// Creating a slice for transactions
export const transactionSlice = createSlice({
  name: "transaction", // Slice name
  initialState: {
    balance: 0, // Initial state with balance 0
  },
  reducers: {
    // Reducer function for deposit action
    deposit: (state, action) => {
      state.balance += action.payload; // Incrementing the balance by action payload (amount)
    },
    // Reducer function for withdraw action
    withdraw: (state, action) => {
      state.balance -= action.payload; // Decrementing the balance by action payload (amount)
      // if(state.balance == 0){
      //   console.log("hello");
      // }else{
      //   state.balance -= action.payload;
      // }
    },
  },
});

// Extracting action creators and reducer from the slice
export const { deposit, withdraw } = transactionSlice.actions;
export default transactionSlice.reducer;
