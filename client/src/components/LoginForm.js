import React, { useState } from 'react';
import api from '../api';
import { Button, TextField, Container, Typography, Box, Link } from '@mui/material';

const LoginForm = ({ setAuth, setShowRegister }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/auth/login', { username, password });
            localStorage.setItem('token', response.data.token);
            setAuth(true);
        } catch (error) {
            console.error(error);
            alert('Login failed');
        }
    };

    return (
        <Container maxWidth="xs">
            <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h5" component="h1" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Login
                    </Button>
                    <Box mt={2}>
                        <Link component="button" variant="body2" onClick={() => setShowRegister(true)}>
                            Don't have an account? Register here
                        </Link>
                    </Box>
                </form>
            </Box>
        </Container>
    );
};

export default LoginForm;
