import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import NoPage from "./pages/NoPage";
import { useEffect } from "react";

const App = () => {
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/about");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default App;
