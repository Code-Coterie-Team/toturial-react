import React from "react";
import ChildB from "./ChildB";

const ChildA = (props) => {
  return (
    <div>
      ChildA
      <ChildB />
    </div>
  );
};

export default ChildA;
