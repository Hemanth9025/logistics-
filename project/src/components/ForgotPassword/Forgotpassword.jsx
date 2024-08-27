import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Forgotpassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '' });
    const navigate = useNavigate(); // Initialize useNavigate

    const validateForm = () => {
        let valid = true;
        let errors = {};

        if (!email) {
            errors.email = 'Email is required';
            valid = false;
        }

        const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!passwordRegex.test(newPassword)) {
            errors.password = 'Password must be at least 6 characters long and include one uppercase letter, one lowercase letter, one number, and one special character';
            valid = false;
        }

        if (newPassword !== confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.get('http://localhost:3001/users');
                const users = response.data;

                // Check if the user with the provided email exists
                const user = users.find(user => user.email === email);
                if (user) {
                    // Update the password
                    user.password = newPassword;

                    // Save the updated user back to the database
                    await axios.put(`http://localhost:3001/users/${user.id}, user`);
                    setMessage('Password updated successfully.');

                    // Redirect to login after a short delay
                    setTimeout(() => {
                        navigate("/"); // Redirect to login page
                    }, 2000);
                } else {
                    setMessage('Email not found.');
                }
            } catch (error) {
                setMessage('Error updating password.');
                console.error('There was an error!', error);
            }
        } else {
            setMessage('');
        }
    };

    return (
        <div className="forgot-password-container">
            <form onSubmit={handleSubmit} className="forgot-password-form">
                <h2>Reset Password</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="error">{errors.email}</p>}
                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                {errors.password && <p className="error">{errors.password}</p>}
                <input
                    type="password"
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                <button type="submit">Reset Password</button>
                {message && <p className="message">{message}</p>}
            </form>
        </div>
    );
};

export default ForgotPassword;