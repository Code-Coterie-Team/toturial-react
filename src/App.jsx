// import { useRef } from "react";

import { useReducer } from "react";

const App = () => {
  // const [count, setCount] = useState(0);

  const initialCount = 0;

  const reducer = (state, action) => {
    if (action.payload === "INCREASE") {
      return state + 1;
    }

    if (action.payload === "DECREASE") {
      return state - 1;
    }

    if (action.payload === "RESET") {
      return 0;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialCount);

  //increase
  // setCount((prev)=>prev +1)
  //decrease
  //setCount((prev)=>prev-1)
  //reset
  //setCount(0)
  //

  return (
    <div className="p-16 flex gap-16">
      <h1>{count}</h1>
      <button onClick={() => dispatch({ payload: "INCREASE" })}>
        Increase
      </button>
      <button onClick={() => dispatch({ payload: "DECREASE" })}>
        decrease
      </button>
      <button onClick={() => dispatch({ payload: "RESET" })}>reset</button>
    </div>
  );
};

export default App;
