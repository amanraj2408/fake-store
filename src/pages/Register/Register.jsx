import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
    name: { firstname: 'Aman', lastname: 'Raj' },
    address: {
      city: 'Delhi',
      street: 'Main St',
      number: 123,
      zipcode: '110001',
      geolocation: { lat: '0', long: '0' },
    },
    phone: '1234567890',
  });

  const handleRegister = async () => {
    const res = await fetch('https://fakestoreapi.com/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    console.log(data);
    alert('Registration successful');
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <input placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
      <input placeholder="Username" onChange={(e) => setUser({ ...user, username: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;