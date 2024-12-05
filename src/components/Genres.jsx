import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Genres() {
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async function fetchGenres() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_KEY}`
      );
      setGenres(response.data.genres);
    })();
  }, []);

  return (
    <div className="genres-container">
      <h2 className="section-title">Browse by Genre</h2>
      <ul className="genres-list">
        {genres.map((genre) => (
          <li key={genre.id} onClick={() => navigate(`/movies/genre/${genre.id}`)} className="genre-item">
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Genres;