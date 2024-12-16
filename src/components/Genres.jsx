import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Genres(props) {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const handleGenreClick = (genreId) => {
    if (!isLoggedIn) {
      alert("You need to log in and select genres you want to access.");
      navigate("/login");
    } else {
      navigate(`/movies/genre/${genreId}`);
    }
  };

  return (
    <div className="genres-container">
      <h2 className="section-title">Browse by Genre</h2>

      {!isLoggedIn && (
        <div className="login-message">
          <p>You need to be logged in and select genres to access movies.</p>
        </div>
      )}

      {isLoggedIn && props.genreList.length > 0 && (
        <ul className="genres-list">
          {props.genreList.map((genre) => (
            <li
              key={genre.id}
              onClick={() => handleGenreClick(genre.id)}
              className="genre-item"
            >
              {genre.genre}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Genres;