import { MarginRounded } from '@mui/icons-material';
import { Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';

function ScrollableCenterText() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Center content initially
    centerContent();
    
    // Add window resize listener
    window.addEventListener('resize', MarginRounded);
    
    // Cleanup
    return () => window.removeEventListener('resize', MarginRounded);
  }, []);

  const centerContent = () => {
    if (containerRef.current && contentRef.current) {
      // Calculate center position
      const containerHeight = containerRef.current.clientHeight;
      const contentHeight = contentRef.current.scrollHeight;
      const scrollPosition = (contentHeight - containerHeight) / 2;
      
      // Set scroll position
      containerRef.current.scrollTop = scrollPosition;
    }
  };

  return (
    <div 
      ref={containerRef}
      style={{
        height: '100vh',
        width: '100%',
        overflowY: 'auto',
        position: 'fixed',
      }}
    >
      <div
        ref={contentRef}
        style={{
          display: 'flex',
          justifyContent: '200',
          alignItems: '200',
          minHeight: '60vh',
          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        <Box style={{ textAlign: '200' }}>
          <h1>Hello its a business</h1>
          {[...Array(1)].map((_, i) => (
            <p key={i} >This is a government registered site:</p>
          ))}
          </Box>
          
          
      </div>
    </div>
  );
}

export default ScrollableCenterText;