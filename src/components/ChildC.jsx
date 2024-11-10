import { useDispatch, useSelector } from "react-redux";
import { setCounter } from "../features/counterSlice";

const ChildC = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <div>{`in Child c ${count}`}</div>

      <button
        onClick={() => {
          dispatch(setCounter(count - 1));
        }}
      >
        decrease
      </button>
    </div>
  );
};

export default ChildC;
