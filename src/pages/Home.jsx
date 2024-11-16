import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  // const handleClick = () => {
  //   setCount((prev) => prev + 1);
  // };
  return (
    <div className="flex flex-col">
      <header className="flex gap-4">
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="Products">Products</Link> */}
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Heme
        </button>
        <button
          onClick={() => {
            navigate("/about");
          }}
        >
          about
        </button>
      </header>

      {/* <header className="flex gap-4">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="Products">Products</a>
      </header> */}

      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        increase
      </button>

      <h1>{count}</h1>
    </div>
  );
};

export default Home;
