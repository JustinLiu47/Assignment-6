import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Feature() {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
    function shuffle(array) {
        let currentIndex = array.length;
        while (currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
    }
    useEffect(() => {
        (async function getMovies() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`
              );
              const moviesList = [];
              shuffle(response.data.results);
              moviesList.push(response.data.results.pop());
              moviesList.push(response.data.results.pop());
              moviesList.push(response.data.results.pop());
              moviesList.push(response.data.results.pop());
              moviesList.push(response.data.results.pop());
              moviesList.push(response.data.results.pop());
              moviesList.push(response.data.results.pop());
              moviesList.push(response.data.results.pop());
              moviesList.push(response.data.results.pop());
              moviesList.push(response.data.results.pop());
              setMovies(moviesList);
        })();
    }, []);

    function loadMovie(id) {
        navigate(`/movies/${id}`);
    }

    return (
        <div>
            <div className="section_title_featured">Featured</div>
            <div className="featured">
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

export default Feature;
