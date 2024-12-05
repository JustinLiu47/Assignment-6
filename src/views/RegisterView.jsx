import { useNavigate } from 'react-router-dom';
import Header from "../components/Header"

function RegisterView() {
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/login');
    }

    return (
        <div className="register-container">
            <Header />
            <div className="form-container">
                <h2>Create an Account</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                    
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirm-password" required />
                    
                    <button type="submit" className="register-button">Register</button>
                </form>
                <p className="login-link">
                    Already have an account? 
                    <span className="login-link-text" onClick={() => navigate('/login')}>
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
}

export default RegisterView;