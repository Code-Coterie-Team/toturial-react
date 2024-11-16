import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default App;
