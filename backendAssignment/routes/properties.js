// // routes/properties.js
// const express = require('express');
// const router = express.Router();
// const Property = require('../model/Property');

// // Get All Properties
// router.get('/', async (req, res) => {
//   try {
//     const properties = await Property.find(req.query);
//     res.json(properties);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Get Property by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const property = await Property.findById(req.params.id);
//     if (!property) return res.status(404).json({ message: 'Property not found' });
//     res.json(property);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Create a New Property
// router.post('/', async (req, res) => {
//   const { name, location, price, description, images } = req.body;
//   const newProperty = new Property({ name, location, price, description, images });

//   try {
//     const savedProperty = await newProperty.save();
//     res.status(201).json(savedProperty);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Update Property by ID
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedProperty = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedProperty) return res.status(404).json({ message: 'Property not found' });
//     res.json(updatedProperty);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Delete Property by ID
// router.delete('/:id', async (req, res) => {
//   try {
//     const deletedProperty = await Property.findByIdAndDelete(req.params.id);
//     if (!deletedProperty) return res.status(404).json({ message: 'Property not found' });
//     res.json({ message: 'Property deleted' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;
// //mongodb://localhost:27017



// routes/properties.js

const express = require('express');
const router = express.Router();
const Property = require('../model/Property');

module.exports = (upload) => {
  // Get All Properties
  router.get('/', async (req, res) => {
    try {
      const properties = await Property.find(req.query);
      res.json(properties);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // Get Property by ID
  router.get('/:id', async (req, res) => {
    try {
      const property = await Property.findById(req.params.id);
      if (!property) return res.status(404).json({ message: 'Property not found' });
      res.json(property);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // Create a New Property
  router.post('/', upload.array('images', 10), async (req, res) => {
    const { name, location, price, description } = req.body;
    const images = req.files.map(file => file.path);

    const newProperty = new Property({ name, location, price, description, images });

    try {
      const savedProperty = await newProperty.save();
      res.status(201).json(savedProperty);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  // Update Property by ID
  router.put('/:id', upload.array('images', 10), async (req, res) => {
    const { name, location, price, description } = req.body;
    const images = req.files ? req.files.map(file => file.path) : undefined;

    try {
      const updatedProperty = await Property.findByIdAndUpdate(
        req.params.id,
        { name, location, price, description, images },
        { new: true }
      );
      if (!updatedProperty) return res.status(404).json({ message: 'Property not found' });
      res.json(updatedProperty);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  // Delete Property by ID
  router.delete('/:id', async (req, res) => {
    try {
      const deletedProperty = await Property.findByIdAndDelete(req.params.id);
      if (!deletedProperty) return res.status(404).json({ message: 'Property not found' });
      res.json({ message: 'Property deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  return router;
};
