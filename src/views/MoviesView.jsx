import { Outlet, useNavigate } from "react-router-dom";
import "./MoviesView.css";

function MoviesView() {

  const navigate = useNavigate();

  function logout() {
    navigate("/");
  }

  return (
    <div className="app-container">
      <div className="header">
        <h1>Welcome, User!</h1>
        <button onClick={() => logout()} className="logout-button">Logout</button>
      </div>
      <Outlet />
    </div>
  );
}

export default MoviesView;