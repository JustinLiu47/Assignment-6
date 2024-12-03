import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Header() {
    const navigate = useNavigate();
    const { isLoggedIn, logout } = useAuth();

    function handleLogout() {
        logout();
        navigate("/");
    }

    return (
        <div className="header">
            <button className="balance1"></button>
            <button className="balance2"></button>
            <span className="title">Gitflix</span>

            {isLoggedIn ? (
                <button className="logout" onClick={handleLogout}>Log Out</button>
            ) : (
                <>
                    <button className="balance2"></button>
                    <button className="signup" onClick={() => navigate("/register")}>Sign Up</button>
                    <button className="signin" onClick={() => navigate("/login")}>Sign In</button>
                </>
            )}
        </div>
    );
}

export default Header;