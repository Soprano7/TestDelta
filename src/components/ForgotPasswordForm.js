import React, { useState } from 'react';
import './../App.css';

const ForgotPasswordForm = ({ onSwitchToLogin }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setMessage('Ссылка для сброса пароля отправлена!');
        } else {
            setMessage('Пожалуйста, введите ваш email.');
        }
    };

    return (
        <div className="auth-container">
            <h2>Забыли пароль</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Отправить ссылку для сброса</button>
                <button type="button" className="secondary" onClick={onSwitchToLogin}>Назад к авторизации</button>
                {message && <p className={message.includes('отправлена') ? 'success' : 'error'}>{message}</p>}
            </form>
        </div>
    );
};

export default ForgotPasswordForm;
