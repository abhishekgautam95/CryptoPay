// src/components/Login.js

import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '../firebaseConfig'; // Adjust path if needed

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Handle successful login
    } catch (error) {
      // Handle errors
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
