import React, { useState } from "react";

const AddressBook = ({ setToWallet }) => {
  const [addresses] = useState([
    { label: "Friend 1", address: "Address1" },
    { label: "Friend 2", address: "Address2" }
  ]);

  return (
    <div className="address-book">
      <h3>Address Book</h3>
      <select onChange={(e) => setToWallet(e.target.value)}>
        <option>Select Address</option>
        {addresses.map((entry, index) => (
          <option key={index} value={entry.address}>{entry.label}</option>
        ))}
      </select>
    </div>
  );
};

export default AddressBook;
