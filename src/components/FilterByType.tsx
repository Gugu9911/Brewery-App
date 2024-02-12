import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FilterByType = () => {
  const [filter, setFilter] = useState<string>('');
  const navigate = useNavigate();


  const handleChange = (event: SelectChangeEvent<string>) => {
    setFilter(event.target.value as string);
    navigate(`filter?type=${event.target.value}`);
  };


  return (
    <FormControl sx={{ width: 300, marginTop:3, bgcolor:'#e0ffcd' }} >
      <InputLabel id="filter-select-label">Filter</InputLabel>
      <Select
        labelId="filter-select-label"
        id="filter-select"
        value={filter}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="micro">Micro</MenuItem>
        <MenuItem value="nano">Nano</MenuItem>
        <MenuItem value="regional">Regional</MenuItem>
        <MenuItem value="brewpub">Brewpub</MenuItem>
        <MenuItem value="large">Large</MenuItem>
        <MenuItem value="planning">Planning</MenuItem>
        <MenuItem value="bar">Bar</MenuItem>
        <MenuItem value="contract">Contract</MenuItem>
        <MenuItem value="proprietor">Proprietor</MenuItem>
        <MenuItem value="closed">Closed</MenuItem>
      </Select>
    </FormControl>
  );
};

export default FilterByType;
