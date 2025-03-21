import React from 'react';
import { createRoot } from 'react-dom/client'; // Use createRoot from react-dom/client
import App from './App';
import reportWebVitals from './reportWebVitals';

// Optional: Uncomment and use these if needed
// import { ThemeProvider } from '@mui/material';
// import { theme } from './Components/theme';
// import { BrowserRouter } from 'react-router-dom';

// Get the root element
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Render the app
root.render(
  <React.StrictMode>
    {/* Wrap your app in additional providers if needed */}
    {/* <ThemeProvider theme={theme}> */}
    {/*   <BrowserRouter> */}
    <App />
    {/*   </BrowserRouter> */}
    {/* </ThemeProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();