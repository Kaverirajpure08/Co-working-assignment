



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Button, Grid, TextField, MenuItem } from '@mui/material';
import { Input, FormGroup, Label, FormText } from 'reactstrap';
import location from "../assets/location.png"
import { useTheme } from '@mui/material/styles';
import {
 
 
  
  
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    type: ''
  });
  const [availableTypes, setAvailableTypes] = useState([]);
  const [open, setOpen] = useState(false);
  const [propertyToDelete, setPropertyToDelete] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    axios.get('http://192.168.86.77:5000/api/properties').then((res) => {
      setProperties(res.data);
    });
  }, []);

  useEffect(() => {
    // Update available types based on selected location
    const filteredProperties = properties.filter(
      (property) => !filters.location || property.location === filters.location
    );
    const types = [...new Set(filteredProperties.map((property) => property.type))];
    setAvailableTypes(types);
  }, [filters.location, properties]);

  const handleDelete = (id) => {
    axios.delete(`http://192.168.86.77:5000/api/properties/${id}`).then(() => {
      setProperties(properties.filter((property) => property._id !== id));
    });
  };

  const handleClickOpen = (property) => {
    setPropertyToDelete(property);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPropertyToDelete(null);
  };

  const handleResetFilters = () => {
    setFilters({
      location: '',
      minPrice: '',
      maxPrice: '',
      type: ''
    });
    setSearch('');
  };

  const handleConfirmDelete = () => {
    if (propertyToDelete) {
      handleDelete(propertyToDelete._id);
      handleClose();
    }
  };


  const filteredProperties = properties
    .filter((property) =>
      property.name.toLowerCase().includes(search.toLowerCase()) ||
      property.location.toLowerCase().includes(search.toLowerCase())
    )
    .filter((property) =>
      (!filters.location || property.location === filters.location) &&
      (!filters.minPrice || property.price >= filters.minPrice) &&
      (!filters.maxPrice || property.price <= filters.maxPrice) &&
      (!filters.type || property.type === filters.type)
    );
    const uniqueLocations = [...new Set(properties.map((property) => property.location))];
  return (
    <div>
       <div style={{ marginTop: '1rem', display: 'flex',alignItems:"flex-end" }}>
      <Input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name or location"
        style={{ marginRight: '1rem', width: '25%' }}
        // fullWidth
      />

<Link to="/add-property">
          <Button variant="contained" color="primary">
            Add New Property
          </Button>
        </Link>
        </div>

      {/* <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <TextField
          select 
          label="Location"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          fullWidth
          style={{ marginRight: '1rem' }}
        >
          <MenuItem value="">All Locations</MenuItem>
          {[...new Set(properties.map((property) => property.location))].map((location) => (
            <MenuItem key={location} value={location}>
              {location}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          type="number"
          label="Min Price"
          value={filters.minPrice}
          onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
          fullWidth
          style={{ marginRight: '1rem' }}
        />

        <TextField
          type="number"
          label="Max Price"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
          fullWidth
          style={{ marginRight: '1rem' }}
        />

        <TextField
          select
          label="Property Type"
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          fullWidth
        >
          <MenuItem value="">All Types</MenuItem>
          {availableTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>

<Button onClick={handleResetFilters} variant="outlined">
          Reset Filters
        </Button>

      </div> */}

<div style={{ display: 'flex', marginTop: '1rem' }}>
      <FormGroup style={{ marginRight: '1rem', width: '25%' }}>
        <Label for="locationSelect">Location</Label>
        <Input
          type="select"
          id="locationSelect"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        >
          <option value="">All Locations</option>
          {uniqueLocations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </Input>
      </FormGroup>

      <FormGroup style={{ marginRight: '1rem', width: '25%' }}>
        <Label for="minPrice">Min Price</Label>
        <Input
          type="number"
          id="minPrice"
          value={filters.minPrice}
          onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
        />
      </FormGroup>

      <FormGroup style={{ marginRight: '1rem', width: '25%' }}>
        <Label for="maxPrice">Max Price</Label>
        <Input
          type="number"
          id="maxPrice"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
        />
      </FormGroup>

      {/* <Button onClick={handleResetFilters} style={{ alignSelf: 'flex-end', height: '2.5rem' }} outline color="primary">
        Reset Filters
      </Button> */}

      <Button onClick={handleResetFilters} variant="contained" color="primary" style={{  height: '2.5rem' ,marginTop:'2rem'}}>
      Reset Filters
          </Button>
    </div>


      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between' }}>
        {/* <Button onClick={handleResetFilters} variant="outlined">
          Reset Filters
        </Button> */}

        {/* <Link to="/add-property">
          <Button variant="contained" color="primary">
            Add New Property
          </Button>
        </Link> */}
      </div>

      <Grid container spacing={3} style={{ marginTop: '1rem' }}>
        {filteredProperties.map((property) => (
          <Grid item xs={12} sm={6} md={4} key={property._id}>
            <Card>
              {/* <CardMedia
                component="img"
                height="140"
                image={property.images && property.images[0]} // Assuming the first image in the array is used
                alt={property.name}
              /> */}

            {/* {property.images.map((image, index) => (
              <img
                key={index}
                src={`http://localhost:5000/${image}`}
                alt={`${property.name} ${index}`}
                style={{ width: '200px', height: '150px', objectFit: 'cover', margin: '10px' }}
              />
            ))} */}
              
              <CardMedia
        component="img"
        height="140"
        image={property.images && `http://localhost:5000/${property.images[0]}`} // Use the first image
        alt={property.name}
      />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {property.name}
                </Typography>
                <Typography   style={{ 
    fontFamily: 'sans-serif',  // Replace 'Arial' with your preferred font name
    fontWeight: 600 // Adjust the weight as needed (e.g., 400 for normal, 600 for semi-bold, 700 for bold)
  }}>
                  <img src={location} style={{height:"1rem"}}></img>
                  {property.location}
                </Typography>
                
                {/* <Typography variant="body2" color="text.secondary">
                  {property.description}
                </Typography> */}
                 <Typography  style={{ 
    fontFamily: 'sans-serif',  // Replace 'Arial' with your preferred font name
    fontWeight: 400 // Adjust the weight as needed (e.g., 400 for normal, 600 for semi-bold, 700 for bold)
  }}>
                  {property.description}
                </Typography>
                <Typography variant="body1" color="text.primary">
                ₹{property.price}
                </Typography>

                
              </CardContent>
              <div style={{marginBottom:"1rem"}}>
              {/* <Button size="small" onClick={() => handleDelete(property._id)} style={{border:"1px solid", marginRight:"1rem",marginLeft:"0.5rem"}}>
                Delete
              </Button> */}
                <Button size="small" onClick={() => handleClickOpen(property)} style={{ border: "1px solid", marginRight: "1rem", marginLeft: "0.5rem" }}>
                  Delete
                </Button>
              <Link to={`/edit-property/${property._id}`}>
                <Button size="small" style={{border:"1px solid"}} >Edit</Button>
              </Link>
</div>


            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this property?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleConfirmDelete} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PropertyList;



