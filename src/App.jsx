import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "./redux/transactionSlice";

function App() {
  const dispatch = useDispatch(); // useDispatch hook to dispatch actions
  const balance = useSelector((state) => state.transaction.balance); // useSelector hook to access Redux state

  // Function to handle deposit button click
  const handleDeposit = () => {
    dispatch(deposit(10)); // Dispatching the deposit action with amount 10
  };

  // Function to handle withdraw button click
  const handleWithdraw = () => {
    dispatch(withdraw(10)); // Dispatching the withdraw action with amount 10
  };

  return (
    <div>
      <h1>Redux Demo</h1>
      <div>Balance: ${balance}</div>
      <button onClick={handleDeposit}>Deposit $10</button>
      <button onClick={handleWithdraw}>Withdraw $10</button>
    </div>
  );
}

export default App;
