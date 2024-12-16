import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
    const navigate = useNavigate();
    const { isLoggedIn, logout } = useAuth();

    function handleLogout() {
        logout();
        navigate("/");
    }

    return (
        <div className="header">
            <span className="title" onClick={() => navigate("/")}>Gitflix</span>
            <span className="spacer"></span>
            {isLoggedIn ? (
                <>
                    <button className="cart" onClick={() => navigate("/cart")}>Cart</button>
                    <button className="settings" onClick={() => navigate("/settings")}>Settings</button>
                    <button className="logout" onClick={handleLogout}>Log Out</button>
                </>
            ) : (
                <>
                    <button className="signup" onClick={() => navigate("/register")}>Sign Up</button>
                    <button className="signin" onClick={() => navigate("/login")}>Sign In</button>
                </>
            )}
        </div>
    );
}

export default Header;