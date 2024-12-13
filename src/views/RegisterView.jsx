import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../context/RegistrationContext';
import Header from "../components/Header";

function RegisterView() {
  const navigate = useNavigate();
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    selectedGenres,
    errorMessage,
    handleInputChange,
    handleGenreChange,
    handleSubmit,
  } = useRegistration();

  return (
    <div className="register-container">
      <Header />
      <div className="form-container">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleInputChange}
            required
          />

          <h2>Select Genres</h2>
          <div id="genre-div" className="genre-div">
            {["28", "10751", "878", "12", "14", "16", "36", "53", "35", "27", "10752", "80", "10402", "37", "99", "9648", "18", "10749"].map((genreId) => (
              <label key={genreId}>
                <input
                  type="checkbox"
                  name="genre"
                  value={genreId}
                  onChange={handleGenreChange}
                  checked={selectedGenres.includes(genreId)}
                />
                {genreId}
              </label>
            ))}
          </div>

          {errorMessage && <p className="error">{errorMessage}</p>}

          <button type="submit" className="register-button">Register</button>
        </form>

        <p className="login-link">
          Already have an account?
          <span className="login-link-text" onClick={() => navigate('/login')}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default RegisterView;