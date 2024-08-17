import React from 'react';
import { Grid } from '@mui/material';
import PropertyCard from './PropertyCard';

const ResultsGrid = () => {
  const properties = [
    {
      image: 'image-url',
      title: 'Awfis - Business Mantri',
      location: 'Viman Nagar, Pune',
      price: '₹10,999 / desk / month',
      availability: 'Open Now, 08:00 to 20:00'
    },
    // Add more properties here
  ];

  return (
    <Grid container spacing={4} style={{ padding: '20px' }}>
      {properties.map((property, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <PropertyCard {...property} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ResultsGrid;
