import React, { useState } from 'react';
import './Loginform.css';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';

export const Loginform = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({ username: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState("");
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        setErrors({ ...errors, username: "" });
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setErrors({ ...errors, password: "" });
    };

    const validateForm = () => {
        let valid = true;
        let errors = {};

        if (username.trim().length < 3) {
            errors.username = "Username must be at least 3 characters long";
            valid = false;
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!passwordRegex.test(password)) {
            errors.password = "Password must be at least 6 characters long and include one uppercase letter, one lowercase letter, one number, and one special character";
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            const users = JSON.parse(localStorage.getItem('users')) || [];

            const user = users.find(user => 
                user.name === username && 
                user.password === password && 
                user.role === role
            );

            if (user) {
                setMessage("Successfully Logged In");
                const { password, ...userWithoutPassword } = user;
                localStorage.setItem('loggedInUser', JSON.stringify(userWithoutPassword));
                if (role === "admin") {
                    navigate("/Dashboard"); // Redirect to admin dashboard
                } else {
                    navigate("/HomePage"); // Redirect to user homepage
                }
            } else {
                setMessage("Invalid username, password, or role");
            }
        } else {
            setMessage("");
        }
    };

    const handleForgotPassword = () => {
        navigate("/forgotpassword");
    };

    return (
        <>
            <div className="start">
                <form onSubmit={handleSubmit} className="login-form">
                    <h2>Login</h2>
                    <div className="input__fields">
                        <input
                            id="username"
                            name="username"
                            value={username}
                            placeholder="Username"
                            onChange={handleUsernameChange}
                        />
                        {errors.username && <p className="error">{errors.username}</p>}
                    </div>
                    <div className="input__fields">
                        <div className="password-field">
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                placeholder="Password"
                                onChange={handlePasswordChange}
                            />
                            <button
                                type="button"
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </button>
                        </div>
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div className="input__fields">
                        <select 
                            id="role" 
                            value={role} 
                            onChange={(e) => setRole(e.target.value)}
                            className={role === "" ? "placeholder" : ""}
                        >
                            <option value="" disabled hidden>Role</option>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button type="submit" className="but">Login</button>
                    {message && <p className="message">{message}</p>}
                    <p className="login_link" style={{ color: "black" }}>New User?<Link to="/SignUp">SignUp</Link></p>
                    <button type="button" onClick={handleForgotPassword} className="forgot-password">
                        Forgot Password?
                    </button>
                </form>
            </div>
        </>
    );
};

export default Loginform;
