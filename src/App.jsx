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
// import React from "react";
// import { useState } from "react";

// export default function App() {
//   const [value, setValue] = useState("");
//   const [sum, setSum] = useState(0);
//   const [history, setHistory] = useState([]);

//   const handleClick = () => {
//     const newValue = parseInt(value);
//     if (!isNaN(newValue)) {
//       const addSum = sum + newValue;
//       setSum(addSum);
//       setHistory([...history, addSum]);
//     }
//     console.log("not a number");
//     for(let i=1;i<=6;i-=-1){
//       let value=`*`.repeat(i);
//       console.log("",value);
//     }
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         name="number"
//         value={value}
//         onChange={(e) => {
//           setValue(e.target.value);
//         }}
//       />
//       <button onClick={handleClick}>Add</button>
//       {
//         history.length > 0 && (
//           <ul>
//            {
//             history.map((historyItem, index) => (
//               <li key={index}>{historyItem}</li>
//             ))
//            }
//           </ul>
//         )
//       }
//     </div>
//   );
// }

//yt interview display select option based on countries
// import React from "react";
// import { useState } from "react";

// export default function App() {
//   const countries = [
//     {
//       name: "India",
//       cities: ["Bengaluru", "New Delhi", "Kolkata"],
//       id: 1,
//     },
//     {
//       name: "United States",
//       cities: ["New York", "Los Angeles", "Chicago"],
//       id: 2,
//     },
//     {
//       name: "United Kingdom",
//       cities: ["London", "Manchester", "Birmingham"],
//       id: 3,
//     },
//   ];

//   const [country, setCountry] = useState();
//   const [city, setCities] = useState([])

//   const handleChange = (e) => {
//     const nation = e.target.value;
//     setCountry(nation);
//     const findCityInCountry = countries.find((c) => c.name == nation);
//     if (findCityInCountry) {
//       setCities(findCityInCountry.cities);
//     } else {
//       setCities([]);
//     }
//   };
//   return (
//     <div>
//       <select name="country" onChange={handleChange} value={country}>
//         <option value="">Select Option</option>

//         {countries.map((country, i) => (
//           <option key={i}>{country.name}</option>
//         ))}
//       </select>

//       {city.length > 0 && (
//           <select name="cities">
//             <option value="">Select City</option>
//             {city.map((city, i) => (
//               <option key={i}>{city}</option>
//             ))}
//           </select>
//       )}

//     </div>
//   );
// }

import React from 'react'

export default function App() {
  return (
    <div>App</div>
  )
}
