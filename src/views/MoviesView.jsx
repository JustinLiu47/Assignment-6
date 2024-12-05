import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Genres from "../components/Genres";

function MoviesView() {
  return (
    <div className="movies-view-container">
      <Header />
      <div className="movies-content">
        <div className="genres-sidebar">
          <Genres />
        </div>
        <div className="movie-detail-area">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MoviesView;