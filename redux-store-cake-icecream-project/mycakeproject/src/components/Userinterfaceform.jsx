import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  orderCake,
  restockCake,
  orderIcecream,
  restockIcecream,
} from "./../actions";

function Userinterfaceform() {
  const noOfCakes = useSelector((state) => state.cake.noOfCakes);
  const noOfIcecreams = useSelector((state) => state.icecream.noOfIcecreams);
  const dispatch = useDispatch();

  const [cakeOrderQty, setCakeOrderQty] = useState(1); // State to manage the input value for cake order

  const handleOrderCake = () => {
    for (let i = 0; i < cakeOrderQty; i++) {
      dispatch(orderCake()); // Dispatch the action with the user input value
    }
    setCakeOrderQty("");
  };

  return (
    <div className="App container mt-5">
      <h1 className="text-center mb-4">Redux Store</h1>
      <div className="row mb-3">
        <div className="col text-center">
          <h2>
            Number of Cakes:{" "}
            <span className="badge bg-primary">{noOfCakes}</span>
          </h2>
          <button
            className="btn btn-success me-2"
            onClick={() => dispatch(orderCake())}
          >
            Order Cake
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => dispatch(restockCake(10))}
          >
            Restock Cakes
          </button>

          <div className="mb-3 mt-3">
            <input
              type="number"
              className="form-control form-control-sm" // Adds Bootstrap class for small input
              style={{ backgroundColor: "#f8d7da", color: "#721c24" }} // Custom styles for background and text color
              value={cakeOrderQty}
              onChange={(e) => setCakeOrderQty(Number(e.target.value))} // Update state on input change
              placeholder="Enter quantity"
            />
            <button
              className="btn btn-success me-2 mt-2"
              onClick={handleOrderCake}
            >
              Order Cakes
            </button>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col text-center">
          <h2>
            Number of Icecreams:{" "}
            <span className="badge bg-info">{noOfIcecreams}</span>
          </h2>
          <button
            className="btn btn-success me-2"
            onClick={() => dispatch(orderIcecream())}
          >
            Order Icecream
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => dispatch(restockIcecream(10))}
          >
            Restock Icecreams
          </button>
        </div>
      </div>
    </div>
  );
}

export default Userinterfaceform;
