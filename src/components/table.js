import React, { useState } from "react";

const Table = () => {
  const [items, setItems] = useState([]);

  useState(() => {
    const item = JSON.parse(localStorage.getItem("users"));
    if (item) {
      setItems(item);
    }
  }, [items]);

  return (
    <div>
      <h1>User Data</h1>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        {items.map((test, index) => {
          return (
            <tr key={index}>
              <td>{test?.fristName}</td>
              <td>{test?.lastName}</td>
              <td>{test?.email}</td>
              <td>{test?.Phone}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
