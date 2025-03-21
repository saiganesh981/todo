import React, { useState } from "react";
import { Avatar, Checkbox, Link, Button, FormControlLabel, Grid, Paper, TextField, Typography, Box } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {NavLink} from 'react-router-dom'
const Login = () => {
    const paperStyle = { padding: 20, height: '60vh', width: 300, margin: "20px auto" };
    const avatarStyle = { backgroundColor: '#6841ea' };

    // State for form inputs and error messages
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    // Password validation function
    const validatePassword = (password) => {
        const hasCapitalLetter = /[A-Z]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const hasNumber = /[0-9]/.test(password);

        return hasCapitalLetter && hasSpecialChar && hasNumber;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError('Please fill in all fields.');
            return;
        }

        if (!validatePassword(password)) {
            setError('Password must contain at least one capital letter, one special character, and one number.');
            return;
        }

        // If validation passes, proceed with login logic
        setError('');
        alert('Login successful!');
        // Add your login logic here (e.g., API call)
    };

    return (
        <Grid align="center">
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <Typography>Sign In</Typography>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label='Username'
                        placeholder='Enter username'
                        margin='normal'
                        fullWidth
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        label='Password'
                        placeholder='Enter password'
                        type="password"
                        margin="normal"
                        fullWidth
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && (
                        <Typography color="error" variant="body2">
                            {error}
                        </Typography>
                    )}
                    <Box style={{ textAlign: 'left' }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checked8"
                                    color="primary"
                                />
                            }
                            label="Remember Me"
                        />
                    </Box>
                    <Box style={{ textAlign: 'left' }}>
                        <Button type="submit" variant="contained" color="primary" sx={{ margin: "8px 0" }}>Sign In</Button>
                        <Typography>
                            <Link href="#">
                                Forgot password ?
                            </Link>
                        </Typography>
                        <Typography>  Do you have an account ?
                            <NavLink to="Register">
                                Sign Up ?
                            </NavLink>
                        </Typography>
                    </Box>
                </form>
            </Paper>
        </Grid>
    );
};

export default Login;