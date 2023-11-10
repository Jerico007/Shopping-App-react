import {
  GETSHOPDATA,
  FETCHINGDATA,
  GETSHOPERROR,
  ADDTOCART,
  REMOVEFROMCART,
  CHECKOUTCART,
} from "./actionTypes";
import axios from "axios";

export const getShopData = (data) => {
  return {
    type: GETSHOPDATA,
    payLoad: data,
  };
};

export const fetchingData = () => {
  return {
    type: FETCHINGDATA,
  };
};

export const getShopError = (data) => {
  return {
    type: GETSHOPERROR,
    payLoad: data,
  };
};

export const addToCart = (data) => {
  return {
    type: ADDTOCART,
    payLoad: data,
  };
};

export const removeFromCart = (data) => {
  return {
    type: REMOVEFROMCART,
    payLoad: data,
  };
};

export const checkoutCart = () => {
  return {
    type: CHECKOUTCART,
  };
};

export const fetchData = () => {
  // dispatch(fetchingData());
  return async function (dispatch) {
    try {
      dispatch(fetchingData());
      const response = await axios.get("https://dummyjson.com/products");
      dispatch(getShopData(response.data.products));
    } catch (error) {
      dispatch(getShopError(error));
    }
  };
};
