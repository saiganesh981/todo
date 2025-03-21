import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

export default function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    acceptTerms: false,
  });

  const [error, setError] = useState("");

  const handleChange = ({ target: { name, value, checked, type } }) => {
    setUserData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validatePassword = (password) => {
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    return hasCapitalLetter && hasSpecialChar && hasNumber;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, confirmpassword, acceptTerms } = userData;

    // Check if all fields are filled
    if (!name || !email || !password || !confirmpassword || !acceptTerms) {
      setError('Please fill in all fields.');
      return;
    }

    // Check if passwords match
    if (password !== confirmpassword) {
      setError('Passwords do not match.');
      return;
    }

    // Validate password strength
    if (!validatePassword(password)) {
      setError('Password must contain at least one capital letter, one special character, and one number.');
      return;
    }

    // If validation passes, proceed with registration logic
    setError('');
    alert('Registration successful!');
    // Add your registration logic here (e.g., API call)
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ width: '100%', maxWidth: 500, bgcolor: 'white', margin: '0 auto', padding: 4, borderRadius: 4, textAlign: 'center' }}>
        <Typography variant="h3" color="secondary" gutterBottom>
          Register
        </Typography>
        {error && (
          <Typography variant="body2" color="secondary" sx={{ marginBottom: 2 }}>
            {error}
          </Typography>
        )}
        <TextField
          required
          id="name"
          label="Name"
          placeholder="Enter your name"
          fullWidth
          margin="normal"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
        <TextField
          required
          id="email"
          label="Email"
          placeholder="Enter your email"
          type="email"
          fullWidth
          margin="normal"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <TextField
          required
          id="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
          fullWidth
          margin="normal"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <TextField
          required
          id="confirmpassword"
          label="Confirm Password"
          placeholder="Confirm your password"
          type="password"
          fullWidth
          margin="normal"
          name="confirmpassword"
          value={userData.confirmpassword}
          onChange={handleChange}
        />
        <Box sx={{ display: 'flex', alignItems: 'left', marginTop: 2 }}>
          <Checkbox
            id="acceptTerms"
            name="acceptTerms"
            checked={userData.acceptTerms}
            onChange={handleChange}
          />
          <Typography variant="caption" color="secondary">
            Accept Terms and Conditions
          </Typography>
        </Box>
        <Button type="submit" variant="contained" color="secondary" fullWidth sx={{ marginTop: 2 }}>
          Register
        </Button>
      </Box>
    </form>
  );
}