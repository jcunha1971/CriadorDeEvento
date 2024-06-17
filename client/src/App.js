import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import EventList from './components/EventList';

function App() {
    const [auth, setAuth] = useState(!!localStorage.getItem('token'));
    const [showRegister, setShowRegister] = useState(false);

    return (
        <div className="App">
            {auth ? (
                <EventList />
            ) : showRegister ? (
                <RegisterForm setAuth={setAuth} />
            ) : (
                <LoginForm setAuth={setAuth} setShowRegister={setShowRegister} />
            )}
        </div>
    );
}

export default App;
