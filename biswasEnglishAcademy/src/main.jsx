import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import Home from "./routes/Home.jsx";
import "./index.css";
import About from "./routes/About.jsx";
import Contact from "./routes/Contact.jsx";
import Gallary from "./routes/Gallary.jsx";
import Services from "./routes/Services.jsx";

// import "bootstrap/dist/css/bootstrap.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/gallary",
        element: <Gallary />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {" "}
    <RouterProvider router={router} />{" "}
  </StrictMode>
);
