import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";  

import { Home } from "../pages/";
  
  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route path="/" element={<Home />} />,
    ])
  );
  
  function Router() {
    return <RouterProvider router={router} />;
  }
  
  export { Router };
  