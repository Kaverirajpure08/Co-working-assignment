import React from 'react';
import { AppBar, Toolbar, Typography, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar >
      <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '16px' }} />
        <Typography variant="h6" noWrap>
        CoWork Haven
        </Typography>
        {/* <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <SearchIcon />
          <InputBase placeholder="Search location or workspace in Pune" style={{ marginLeft: 8 }} />
        </div> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Header = () => {
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/properties')
//       .then(response => {
//         setProperties(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching properties:', error);
//       });
//   }, []);

//   return (
//     <div>
//       {properties.map(property => (
//         <div key={property._id}>
//           <h2>{property.name}</h2>
//           <p>{property.location}</p>
//           <p>{property.price}</p>
//           <p>{property.description}</p>
//           <div>
//             {property.images.map((image, index) => (
//               <img
//                 key={index}
//                 src={`http://localhost:5000/${image}`}
//                 alt={`${property.name} ${index}`}
//                 style={{ width: '200px', height: '150px', objectFit: 'cover', margin: '10px' }}
//               />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Header;
