import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ForgotPasswordForm from './ForgotPasswordForm';

const AuthPage = () => {
    const [currentForm, setCurrentForm] = useState('login');

    const switchToLogin = () => setCurrentForm('login');
    const switchToRegister = () => setCurrentForm('register');
    const switchToForgotPassword = () => setCurrentForm('forgotPassword');

    return (
        <div className="auth-page">
            {currentForm === 'login' && (
                <LoginForm
                    onSwitchToRegister={switchToRegister}
                    onSwitchToForgotPassword={switchToForgotPassword}
                />
            )}
            {currentForm === 'register' && (
                <RegisterForm onSwitchToLogin={switchToLogin} />
            )}
            {currentForm === 'forgotPassword' && (
                <ForgotPasswordForm onSwitchToLogin={switchToLogin} />
            )}
        </div>
    );
};

export default AuthPage;
