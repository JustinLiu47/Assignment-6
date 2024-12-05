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
    <div>
      <ul>
        {genres.map((genre) => (
          <li
            key={genre.id}
            onClick={() => navigate(`/movies/genre/${genre.id}`)}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Genres;