// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <>
        <AppBar position="static" sx={{ backgroundColor: '#e0ffcd' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#155263', textDecoration: 'none' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' , fontSize:'40px'}}>Brewery</Link>
        </Typography>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <SearchBar />
        </Box>
      </Toolbar>
    </AppBar>
    </>
  );
};

export default Header;
