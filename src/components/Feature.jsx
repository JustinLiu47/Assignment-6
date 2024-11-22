import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Feature() {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        (async function getMovies() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`
            );
            setMovies(response.data.results);
        })();
    }, []);

    function loadMovie(id) {
        navigate(`/movies/${id}`);
    }

    return (
        <div>
            <div class="section_title_featured">Featured</div>
            {movies.map((movie) => (
                <div class="featured" >
                    <div class="poster a" key={movie.id} onClick={() => { loadMovie(movie.id) }}><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie poster" class="posterPicture"></img></div>
                </div>
            ))}
        </div>
    )
}
export default Feature;