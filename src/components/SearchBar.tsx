import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`search/?name=${encodeURIComponent(inputValue)}`);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2, // Adjusts the space between the input and the button
      }}
    >
      <TextField
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search breweries"
        fullWidth
        InputProps={{
          endAdornment: (
            <Button
              variant="contained"
              sx={{ backgroundColor: '#ffcab0', '&:hover': { backgroundColor: '#cdecb6' } }}
              onClick={handleSearch}
            >
              Search
            </Button>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
