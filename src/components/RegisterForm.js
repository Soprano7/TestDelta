import React, { useState } from 'react';
import './../App.css';

const isValidName = (name) => /^[А-Яа-я\s]+$/.test(name);

const RegisterForm = ({ onSwitchToLogin }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isValidName(name)) {
            setMessage('Имя должно содержать только русские буквы и пробелы.');
            return;
        }

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setMessage('Введите корректный email адрес.');
            return;
        }

        if (password.length < 6) {
            setMessage('Пароль должен содержать минимум 6 символов.');
            return;
        }

        if (password !== confirmPassword) {
            setMessage('Пароли не совпадают.');
            return;
        }

        setMessage('Регистрация прошла успешно!');
    };

    return (
        <div className="auth-container">
            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Подтверждение пароля"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit">Зарегистрироваться</button>
                <button type="button" className="secondary" onClick={onSwitchToLogin}>Назад к авторизации</button>
                {message && <p className={message.includes('успешно') ? 'success' : 'error'}>{message}</p>}
            </form>
        </div>
    );
};

export default RegisterForm;
