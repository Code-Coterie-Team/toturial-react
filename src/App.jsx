import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Products from "./pages/Products";
import Location from "./pages/Location";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    children: [
      {
        path: "location",
        element: <Location />,
      },
      {
        index: true,
        element: <About />,
      },
    ],
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "*",
    element: <NoPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
