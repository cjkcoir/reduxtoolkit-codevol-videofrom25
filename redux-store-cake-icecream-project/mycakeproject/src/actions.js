export const CAKE_ORDERED = "CAKE_ORDERED";
export const CAKE_RESTOCKED = "CAKE_RESTOCKED";
export const ICECREAM_ORDERED = "ICECREAM_ORDERED";
export const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

export const orderCake = () => {
  return {
    type: CAKE_ORDERED,
  };
};

export const restockCake = (qty) => {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
};

export const orderIcecream = () => {
  return {
    type: ICECREAM_ORDERED,
  };
};

export const restockIcecream = (qty) => {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
};
