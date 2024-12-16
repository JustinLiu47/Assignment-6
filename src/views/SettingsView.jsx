import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../context/RegistrationContext';
import Header from "../components/Header";

const genreList = [
  { genre: "Action", id: 28 },
  { genre: "Family", id: 10751 },
  { genre: "Science Fiction", id: 878 },
  { genre: "Adventure", id: 12 },
  { genre: "Fantasy", id: 14 },
  { genre: "Animation", id: 16 },
  { genre: "History", id: 36 },
  { genre: "Thriller", id: 53 },
  { genre: "Comedy", id: 35 },
  { genre: "Horror", id: 27 },
  { genre: "War", id: 10752 },
  { genre: "Crime", id: 80 },
  { genre: "Music", id: 10402 },
  { genre: "Western", id: 37 },
  { genre: "Documentary", id: 99 },
  { genre: "Mystery", id: 9648 },
  { genre: "Drama", id: 18 },
  { genre: "Romance", id: 10749 }
];

function SettingsView() {
  const navigate = useNavigate();
  const {
    currentUser,
    updateUserDetails,
    selectedGenres,
    handleGenreChange,
  } = useRegistration();

  // Check if currentUser is available
  const [firstName, setFirstName] = useState(currentUser?.firstName || '');
  const [lastName, setLastName] = useState(currentUser?.lastName || '');

  // Update firstName and lastName when currentUser changes
  useEffect(() => {
    if (currentUser) {
      setFirstName(currentUser.firstName || '');
      setLastName(currentUser.lastName || '');
    }
  }, [currentUser]);

  if (!currentUser) {
    return <p>Please log in to update your profile.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      updateUserDetails({ firstName, lastName, email: currentUser.email, selectedGenres });
    }
  };

  return (
    <div>
      <Header />
      <div className="profile-container">
        <h2>Update Profile</h2>
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <h2>Select Genres</h2>
          <div id="genre-div" className="genre-div">
            {genreList.map(({ id, genre }) => (
              <label key={id}>
                <input
                  type="checkbox"
                  name="genre"
                  value={id}
                  onChange={() => handleGenreChange(id)}
                  checked={selectedGenres.includes(id)}
                />
                {genre}
              </label>
            ))}
          </div>
          <button type="submit" className="save-change-button">Save Changes</button>
        </form>
      </div>
    </div>
  );
}

export default SettingsView;