import React, { useState, useEffect } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [dataType, setDataType] = useState("users"); // Initialize with default data type

  const url = `https://jsonplaceholder.typicode.com/${dataType}`;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [url]); 

  return (
    <div>
      <h2>User List</h2>
      <button onClick={() => setDataType('users')}>Users</button>
      <button onClick={() => setDataType('posts')}>Posts</button>
      <button onClick={() => setDataType('comments')}>Comments</button>

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
