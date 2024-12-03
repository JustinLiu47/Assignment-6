import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";

function MoviesView() {
  
  return (
    <div className="app-container">
      <Header />
      <Outlet />
    </div>
  );
}

export default MoviesView;