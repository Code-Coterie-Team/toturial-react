//Redux => Global State Manager

import { useDispatch, useSelector } from "react-redux";
import { setCounter } from "./features/counterSlice";
import ChildA from "./components/ChildA";
import { useEffect } from "react";
import { setShowPriceModal } from "./features/modalSlice";

const App = () => {
  const count = useSelector((state) => state.counter.value);

  const isShowPriceModal = useSelector((state) => state.modal.showPriceModal);

  console.log(count, "count");

  const dispatch = useDispatch();

  return (
    <>
      <div>{count}</div>

      <ChildA />

      <button onClick={() => dispatch(setShowPriceModal(true))}>
        Show Modal
      </button>

      {isShowPriceModal && (
        <div className="fixed left-1/2 top-1/2 bg-red-600 w-[300px] h-[300px">
          d
        </div>
      )}

      <button onClick={() => dispatch(setCounter(count + 1))}>Increase</button>
    </>
  );
};

export default App;
