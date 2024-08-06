import React, { useState } from 'react';
import './../App.css';

const LoginForm = ({ onSwitchToRegister, onSwitchToForgotPassword }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            setMessage('Login successful!');
        } else {
            setMessage('Please fill in all fields.');
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
                <button type="button" className="secondary" onClick={onSwitchToRegister}>Register</button>
                <button type="button" className="secondary" onClick={onSwitchToForgotPassword}>Forgot Password</button>
                {message && <p className={message.includes('successful') ? 'success' : 'error'}>{message}</p>}
            </form>
        </div>
    );
};

export default LoginForm;
