

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Filters from './components/Filters';
// import PropertyList from './components/PropertyList';
// import PropertyForm from './components/PropertyForm';

// const App = () => {
//   return (
//     <Router>
//        <Header />
//       <div style={{padding:"1rem"}}>
     
//       {/* <Filters /> */}
//       <Routes>
//         <Route path="/" element={<PropertyList />} />
//         <Route path="/add-property" element={<PropertyForm />} />
//         <Route path="/edit-property/:id" element={<PropertyForm isEdit={true} />} />
//       </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PropertyList from './components/PropertyList';
import PropertyForm from './components/PropertyForm';

const App = () => {
  return (
    <Router>
      <Header />
      <div style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<PropertyList />} />
          <Route path="/add-property" element={<PropertyForm />} />
          <Route path="/edit-property/:id" element={<PropertyForm isEdit={true} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
