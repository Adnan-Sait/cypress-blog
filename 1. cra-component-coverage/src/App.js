import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Contact from "./Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/contact/:id",
      element: <Contact />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
