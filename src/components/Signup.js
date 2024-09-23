// src/components/Logout.js

import React from 'react';
import { auth, signOut } from '../firebaseConfig'; // Adjust path if needed

const Logout = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Handle successful logout
    } catch (error) {
      // Handle errors
      console.error(error.message);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
