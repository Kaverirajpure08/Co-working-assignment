




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Button } from '@mui/material';
// import { toast, ToastContainer } from 'react-toastify';


// const PropertyForm = ({ isEdit }) => {
//   const [property, setProperty] = useState({
//     name: '',
//     location: '',
//     price: '',
//     description: '',
//     images: [],
//   });
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     if (isEdit && id) {
//       axios.get(`http://192.168.86.77:5000/api/properties/${id}`).then((res) => {
//         setProperty(res.data);
//       });
//     }
//   }, [isEdit, id]);

//   const handleChange = (e) => {
//     setProperty({ ...property, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setSelectedFiles(e.target.files);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('name', property.name);
//     formData.append('location', property.location);
//     formData.append('price', property.price);
//     formData.append('description', property.description);

//     for (let i = 0; i < selectedFiles.length; i++) {
//       formData.append('images', selectedFiles[i]);
//     }

//     if (isEdit) {
//       axios.put(`http://192.168.86.77:5000/api/properties/${id}`, formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       }).then(() => navigate('/'));
//     } else {
//       axios.post('http://192.168.86.77:5000/api/properties', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       }).then(() => navigate('/'));
//     }
//   };

//   return (
//   //   <form onSubmit={handleSubmit}>
//   //     <input 
//   //       name="name" 
//   //       value={property.name} 
//   //       onChange={handleChange} 
//   //       placeholder="Name" 
//   //       required 
//   //     />
//   //     <input 
//   //       name="location" 
//   //       value={property.location} 
//   //       onChange={handleChange} 
//   //       placeholder="Location" 
//   //       required 
//   //     />
//   //     <input 
//   //       name="price" 
//   //       type="number" 
//   //       value={property.price} 
//   //       onChange={handleChange} 
//   //       placeholder="Price" 
//   //       required 
//   //     />
//   //     <textarea 
//   //       name="description" 
//   //       value={property.description} 
//   //       onChange={handleChange} 
//   //       placeholder="Description" 
//   //       required 
//   //     />

//   //     <input 
//   //       type="file" 
//   //       multiple 
//   //       onChange={handleFileChange} 
//   //     />

//   //     <Button type="submit">
//   //       {isEdit ? 'Update' : 'Add'} Property
//   //     </Button>
//   //   </form>
//   // );

//   <form onSubmit={handleSubmit} className="p-4">
//   <div className="form-group mb-3">
//     <label htmlFor="name">Name</label>
//     <input 
//       type="text" 
//       name="name" 
//       className="form-control" 
//       value={property.name} 
//       onChange={handleChange} 
//       placeholder="Name" 
//       required 
//     />
//   </div>

//   <div className="form-group mb-3">
//     <label htmlFor="location">Location</label>
//     <input 
//       type="text" 
//       name="location" 
//       className="form-control" 
//       value={property.location} 
//       onChange={handleChange} 
//       placeholder="Location" 
//       required 
//     />
//   </div>

//   <div className="form-group mb-3">
//     <label htmlFor="price">Price</label>
//     <input 
//       type="number" 
//       name="price" 
//       className="form-control" 
//       value={property.price} 
//       onChange={handleChange} 
//       placeholder="Price" 
//       required 
//     />
//   </div>

//   <div className="form-group mb-3">
//     <label htmlFor="description">Description</label>
//     <textarea 
//       name="description" 
//       className="form-control" 
//       value={property.description} 
//       onChange={handleChange} 
//       placeholder="Description" 
//       required 
//     />
//   </div>

//   <div className="form-group mb-3">
//     <label htmlFor="images">Upload Images</label>
//     <input 
//       type="file" 
//       className="form-control" 
//       multiple 
//       onChange={handleFileChange} 
//     />
//   </div>

//   <button type="submit" className="btn btn-primary">
//     {isEdit ? 'Update' : 'Add'} Property
//   </button>
// </form>
// );
// };

// export default PropertyForm;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PropertyForm = ({ isEdit }) => {
  const [property, setProperty] = useState({
    name: '',
    location: '',
    price: '',
    description: '',
    images: [],
  });
  const [selectedFiles, setSelectedFiles] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (isEdit && id) {
      axios.get(`http://192.168.86.77:5000/api/properties/${id}`).then((res) => {
        setProperty(res.data);
      });
    }
  }, [isEdit, id]);

  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', property.name);
    formData.append('location', property.location);
    formData.append('price', property.price);
    formData.append('description', property.description);

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('images', selectedFiles[i]);
    }

    try {
      const action = isEdit ? 'updated' : 'added';
      let response;

      if (isEdit) {
        response = await axios.put(`http://192.168.86.77:5000/api/properties/${id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        response = await axios.post('http://192.168.86.77:5000/api/properties', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }

      if (response.status === 200 || response.status === 201) {
        toast.success(`Property successfully ${action}!`);
        navigate('/');
      } else {
        toast.error('Failed to save the property.');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      toast.error('Failed to save the property.');
    }
  };
  const goToHome=() =>{
    navigate("/")
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="p-4">
        <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            name="name" 
            className="form-control" 
            value={property.name} 
            onChange={handleChange} 
            placeholder="Name" 
            required 
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="location">Location</label>
          <input 
            type="text" 
            name="location" 
            className="form-control" 
            value={property.location} 
            onChange={handleChange} 
            placeholder="Location" 
            required 
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="price">Price</label>
          <input 
            type="number" 
            name="price" 
            className="form-control" 
            value={property.price} 
            onChange={handleChange} 
            placeholder="Price" 
            required 
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="description">Description</label>
          <textarea 
            name="description" 
            className="form-control" 
            value={property.description} 
            onChange={handleChange} 
            placeholder="Description" 
            required 
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="images">Upload Images</label>
          <input 
            type="file" 
            className="form-control" 
            multiple 
            onChange={handleFileChange} 
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{marginRight:"2rem"}}>
          {isEdit ? 'Update' : 'Add'} Property
        </button>
        <button type="button" className="btn btn-primary" onClick={goToHome}>
           Go To Home
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default PropertyForm;

