import React, { createContext, useState, useContext } from 'react';

const RegistrationContext = createContext();

export const useRegistration = () => useContext(RegistrationContext);

export const RegistrationProvider = ({ children }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'firstName') setFirstName(value);
    if (name === 'lastName') setLastName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'confirmPassword') setConfirmPassword(value);
  };

  const handleGenreChange = (e) => {
    const genreId = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedGenres([...selectedGenres, genreId]);
      setErrorMessage('');
    } else {
      setSelectedGenres(selectedGenres.filter((id) => id !== genreId));
      setErrorMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    setErrorMessage('');
  };

  return (
    <RegistrationContext.Provider
      value={{
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
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};
