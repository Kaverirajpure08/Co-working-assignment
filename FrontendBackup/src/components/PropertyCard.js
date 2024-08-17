// import React from 'react';
// import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';

// const PropertyCard = ({ image, title, location, price, availability }) => {
//   return (
//     <Card>
//       <CardMedia component="img" height="140" image={image} alt={title} />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {location}
//         </Typography>
//         <Typography variant="body1" color="text.primary">
//           Prices Starting at {price}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {availability}
//         </Typography>
//       </CardContent>
//       <Button size="small">Get Quote</Button>
//     </Card>
//   );
// };

// export default PropertyCard;


import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const PropertyCard = ({ image, title, location, price, availability }) => {
  return (
    <Card>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {location}
        </Typography>
        <Typography variant="body1" color="text.primary">
          Prices Starting at {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {availability}
        </Typography>
      </CardContent>
      <Button size="small">Edit</Button>
      <Button size="small">Delete</Button>
    </Card>
  );
};

export default PropertyCard;
