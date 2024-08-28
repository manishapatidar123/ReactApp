// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // import { Route, Routes } from 'react-router-dom';
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "./styles/scss/custom.scss";
// import Home from './Home';
// // import ProjectDetails from './pages/ProjectDetails';
// // import Project1 from './pages/project1';
// // import Project2 from './pages/project2';
// // import Project3 from './pages/project3';
// // import Project4 from './pages/project4';
// // import Project5 from './pages/project5';
// // import Project6 from './pages/project6';
// // import Project7 from './pages/project7';
// // import Project8 from './pages/project8';
// // import Project9 from './pages/project9';
// // import Project10 from './pages/project10';
// // import Project11 from './pages/project11';
// // import Project12 from './pages/project12';
// // import Project13 from './pages/project13';
// // import Project14 from './pages/project14';


// function App() {
//   return (
//     <>
//       <Routes>
//           <Route path="/" element={<Home/>} />
//           {/* <Route path="/detailpage" element={<ProjectDetails />} />
//           <Route path="/project1" element={<Project1 />} />
//           <Route path="/project2" element={<Project2 />} />
//           <Route path="/project3" element={<Project3 />} />
//           <Route path="/project4" element={<Project4 />} />
//           <Route path="/project5" element={<Project5 />} />
//           <Route path="/project6" element={<Project6 />} />
//           <Route path="/project7" element={<Project7 />} />
//           <Route path="/project8" element={<Project8 />} />
//           <Route path="/project9" element={<Project9 />} />
//           <Route path="/project10" element={<Project10 />} />
//           <Route path="/project11" element={<Project11 />} />
//           <Route path="/project12" element={<Project12 />} />
//           <Route path="/project13" element={<Project13 />} />
//           <Route path="/project14" element={<Project14 />} /> */}
//       </Routes>
//     </>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';

import './index.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
   
      </Routes>
    </Router>
  );
}

export default App;

