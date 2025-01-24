import { combineReducers } from "redux";
import {
  CAKE_ORDERED,
  CAKE_RESTOCKED,
  ICECREAM_ORDERED,
  ICECREAM_RESTOCKED,
} from "./actions";

const initialCakeState = {
  noOfCakes: 20,
};

const initialIcecreamState = {
  noOfIcecreams: 40,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        noOfCakes: state.noOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        noOfIcecreams: state.noOfIcecreams - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        noOfIcecreams: state.noOfIcecreams + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

export default rootReducer;
