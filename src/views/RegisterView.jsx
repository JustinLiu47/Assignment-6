import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from "../components/Header";

function RegisterView() {
  const navigate = useNavigate();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleGenreChange = (event) => {
    const genreId = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      if (selectedGenres.length >= 10) {
        setErrorMessage('You can only select up to 10 genres.');
        event.target.checked = false;
      } else {
        setSelectedGenres([...selectedGenres, genreId]);
        setErrorMessage('');
      }
    } else {
      setSelectedGenres(selectedGenres.filter((id) => id !== genreId));
      setErrorMessage('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/login');
  };

  return (
    <div className="register-container">
      <Header />
      <div className="form-container">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />

          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" required />

          <h2>Select up to 10 genres</h2>
          <div id="genre-div" className="genre-div">
            <label>
              <input
                type="checkbox"
                name="genre"
                value="28"
                onChange={handleGenreChange}
                checked={selectedGenres.includes("28")}
              /> Action
            </label>
            <label>
              <input
                type="checkbox"
                name="genre"
                value="10751"
                onChange={handleGenreChange}
                checked={selectedGenres.includes("10751")}
              /> Family
            </label>
            <label>
              <input
                type="checkbox"
                name="genre"
                value="878"
                onChange={handleGenreChange}
                checked={selectedGenres.includes("878")}
              /> Science Fiction
            </label>
            <label>
              <input
                type="checkbox"
                name="genre"
                value="12"
                onChange={handleGenreChange}
                checked={selectedGenres.includes("12")}
              /> Adventure
            </label>
            <label>
              <input
                type="checkbox"
                name="genre"
                value="14"
                onChange={handleGenreChange}
                checked={selectedGenres.includes("14")}
              /> Fantasy
            </label>
            <label>
              <input
                type="checkbox"
                name="genre"
                value="16"
                onChange={handleGenreChange}
                checked={selectedGenres.includes("16")}
              /> Animation
            </label>
            <label>
              <input
                type="checkbox"
                name="genre"
                value="36"
                onChange={handleGenreChange}
                checked={selectedGenres.includes("36")}
              /> History
            </label>
            <label>
              <input
                type="checkbox"
                name="genre"
                value="53"
                onChange={handleGenreChange}
                checked={selectedGenres.includes("53")}
              /> Thriller
            </label>
            <label>
              <input
                type="checkbox"
                name="genre"
                value="35"
                onChange={handleGenreChange}
                checked={selectedGenres.includes("35")}
              /> Comedy
            </label>
            <label>
              <input
                type="checkbox"
                name="genre"
                value="27"
                onChange={handleGenreChange}
                checked={selectedGenres.includes("27")}
              /> Horror
            </label>
            <label>
              <input
                type="checkbox"
                name="genre"
                value="10752"
                onChange={handleGenreChange}
                checked={selectedGenres.includes("10752")}
              /> War
            </label>
            <label>
              <input
                type="checkbox"
                name="genre"
                value="80"
                onChange={handleGenreChange}
                checked={selectedGenres.includes("80")}
              /> Crime
            </label>
            <label>
              <input
                type="checkbox"
                name="genre"
                value="10402"
                onChange={handleGenreChange}
                checked={selectedGenres.includes("10402")}
              /> Music
            </label>
            <label>
              <input
                type="checkbox"
                name="genre"
                value="37"
                onChange={handleGenreChange}
                checked={selectedGenres.includes("37")}
              /> Western
            </label>
            <label>
              <input
                type="checkbox"
                name="genre"
                value="99"
                onChange={handleGenreChange}
                checked={selectedGenres.includes("99")}
              /> Documentary
            </label>
            <label>
              <input
                type="checkbox"
                name="genre"
                value="9648"
                onChange={handleGenreChange}
                checked={selectedGenres.includes("9648")}
              /> Mystery
            </label>
            <label>
              <input
                type="checkbox"
                name="genre"
                value="18"
                onChange={handleGenreChange}
                checked={selectedGenres.includes("18")}
              /> Drama
            </label>
            <label>
              <input
                type="checkbox"
                name="genre"
                value="10749"
                onChange={handleGenreChange}
                checked={selectedGenres.includes("10749")}
              /> Romance
            </label>
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