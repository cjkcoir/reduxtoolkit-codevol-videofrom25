import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

const IcecreamView = () => {
  const dispatch = useDispatch();
  const numberOfIcecreams = useSelector(
    (state) => state.icecream.numberOfIcecreams
  );
  return (
    <div className="text-center">
      <h2 className="text-primary">No of Icecreams - {numberOfIcecreams}</h2>
      <button
        className="btn btn-lg btn-primary me-4"
        onClick={() => dispatch(ordered())}
      >
        Order Icecream
      </button>
      <button
        className="btn btn-lg btn-danger me-4"
        onClick={() => dispatch(restocked(10))}
      >
        Restock 10 Icecreams
      </button>
    </div>
  );
};

export default IcecreamView;
