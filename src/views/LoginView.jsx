import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from "../components/Header"

function LoginView() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleLogin(event) {
    event.preventDefault();

    if (password === "iloveyou") {
      login();
      navigate('/');
    } else {
      alert("Wrong password!");
    }
  }

  return (
    <div className="login-container">
      <Header />
      <div className="form-container">
        <h2>Login to Your Account</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" required />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="register-link">
          New to Netflix?
          <span className="register-link-text" onClick={() => navigate('/register')}>
            Register now
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginView;
