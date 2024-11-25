import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./features/themeSlice";

const App = () => {
  const dispatch = useDispatch();

  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      //
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="bg-primary text-black dark:bg-dark-primary h-screen dark:text-white">
      App
      <div className="bg-indigo-400 p-8 flex items-center gap-4 text-black dark:text-white">
        <button
          onClick={() => dispatch(setTheme("dark"))}
          className={` px-4 py-2 rounded-md ${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-400"
          } `}
        >
          Dark
        </button>
        <button
          onClick={() => dispatch(setTheme("light"))}
          className={`bg-gray-400 px-4 py-2 rounded-md ${
            theme === "light" ? "bg-gray-800 text-white" : "bg-gray-400"
          }`}
        >
          Light
        </button>
      </div>
    </div>
  );
};

export default App;
