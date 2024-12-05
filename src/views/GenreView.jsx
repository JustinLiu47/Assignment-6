import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function GenreView() {
    const [movies, setMovies] = useState([]);
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        (async function getGenreMovies() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/genre/${params.id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
            );
            setMovies(response.data.results);
        })();
    }, []);

    function loadMovie(id) {
        navigate(`/movies/${id}`);
    }

    return (
        <div>
            <div className="section_title">Genre</div>
            <div className="genre">
                {movies.map((movie) => (
                    <div className="poster" key={movie.id} onClick={() => { loadMovie(movie.id) }}>
                        <img
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            alt="Movie poster"
                            className="posterPicture"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GenreView;