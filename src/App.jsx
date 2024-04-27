// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deposit, withdraw } from "./redux/transactionSlice";

// function App() {
//   const dispatch = useDispatch(); // useDispatch hook to dispatch actions
//   const balance = useSelector((state) => state.transaction.balance); // useSelector hook to access Redux state

//   // Function to handle deposit button click
//   const handleDeposit = () => {
//     dispatch(deposit(10)); // Dispatching the deposit action with amount 10
//   };

//   // Function to handle withdraw button click
//   const handleWithdraw = () => {
//     dispatch(withdraw(10)); // Dispatching the withdraw action with amount 10
//   };

//   return (
//     <div>
//       <h1>Redux Demo</h1>
//       <div>Balance: ${balance}</div>
//       <button onClick={handleDeposit}>Deposit $10</button>
//       <button onClick={handleWithdraw}>Withdraw $10</button>
//     </div>
//   );
// }

// export default App;



//interview add previous sum display total 
import React from "react";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [sum, setSum] = useState(0);
  const [history, setHistory] = useState([]);

  const handleClick = () => {
    const newValue = parseInt(value);
    if (!isNaN(newValue)) {
      const addSum = sum + newValue;
      setSum(addSum);
      setHistory([...history, addSum]);
    }
    console.log("not a number");
  };
  return (
    <div>
      <input
        type="text"
        name="number"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={handleClick}>Add</button>
      {
        history.length > 0 && (
          <ul>
           {
            history.map((historyItem, index) => (
              <li key={index}>{historyItem}</li>
            ))
           }
          </ul>
        )
      }
    </div>
  );
}
