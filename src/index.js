import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import Login from './pages/Login'
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

//NEW CODE STARTS HERE

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Login from './pages/Login';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Corrected import statement
// import { ContextProvider } from './contexts/ContextProvider';

// const routing = (
//   <Router>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/Login" element={<Login />} />
//     </Routes>
//   </Router>
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <ContextProvider>
//       {routing}
//     </ContextProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//OTHER METHOD

// import React from 'react';
// import ReactDOM from 'react-dom';

// import './index.css';
// import App from './App';
// import Login from './pages/Login';
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { ContextProvider } from './contexts/ContextProvider';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   {
//     path: '/Login',
//     element: <Login />
//   }
// ])

// ReactDOM.render(
//   <React.StrictMode>
//     <ContextProvider>
//     <RouterProvider router={router}/>
//     </ContextProvider>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

//MORE NEW CODE

// import React from 'react';
// import ReactDOM from 'react-dom';

// import './index.css';
// import App from './App';
// import { ContextProvider } from './contexts/ContextProvider';
// import CustomRoutes from './CustomRoutes';

// ReactDOM.render(
//   <React.StrictMode>
//     <ContextProvider>
//     <CustomRoutes />
//     </ContextProvider>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
