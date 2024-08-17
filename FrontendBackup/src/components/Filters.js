import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, Grid, Button } from '@mui/material';

const Filters = () => {
  return (
    <Grid container spacing={2} style={{ padding: '20px' }}>
      <Grid item xs={12} sm={6} md={3}>
        <FormControl fullWidth>
          <InputLabel>Product</InputLabel>
          <Select defaultValue="">
            <MenuItem value="Coworking Space">Coworking Space</MenuItem>
            {/* Add more options here */}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <FormControl fullWidth>
          <InputLabel>City</InputLabel>
          <Select defaultValue="Pune">
            <MenuItem value="Pune">Pune</MenuItem>
            {/* Add more options here */}
          </Select>
        </FormControl>
      </Grid>
      {/* Add more filters here */}
      <Grid item xs={12} sm={6} md={3}>
        <Button variant="contained" color="primary" fullWidth>Reset Filters</Button>
      </Grid>
    </Grid>
  );
};

export default Filters;
