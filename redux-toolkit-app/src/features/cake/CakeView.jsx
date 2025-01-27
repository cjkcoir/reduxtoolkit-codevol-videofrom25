import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  return (
    <div className="text-center">
      <h2 className="text-primary">No of Cakes - {numberOfCakes} </h2>
      <button
        className="btn btn-lg btn-primary me-4"
        onClick={() => dispatch(ordered())}
      >
        Order Cake
      </button>
      <button
        className="btn btn-lg btn-danger me-4"
        onClick={() => dispatch(restocked(10))}
      >
        Restock 10 Cakes
      </button>

      <input
        type="number"
        name=""
        id=""
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className="ms-3"
      />

      <button
        className="btn btn-lg btn-danger me-4"
        onClick={() => dispatch(restocked(value))}
      >
        Restock {value} Cakes
      </button>
    </div>
  );
};

export default CakeView;
