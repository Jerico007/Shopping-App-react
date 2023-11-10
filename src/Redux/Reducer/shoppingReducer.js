import {
  GETSHOPDATA,
  ADDTOCART,
  REMOVEFROMCART,
  CHECKOUTCART,
  FETCHINGDATA,
  GETSHOPERROR,
} from "../Action/actionTypes";

const initial = {
  fetching: false,
  data: [],
  error: null,
  cartData: [],
 
};
const shoppingReducer = (state = initial, action) => {
  if (action.type === GETSHOPDATA) {
    return {
      ...state,
      data: [...action.payLoad],
      error: null,
      fetching: false,
    };
  } else if (action.type === FETCHINGDATA) {
    return { ...state, fetching: true };
  } else if (action.type === GETSHOPERROR) {
    return { ...state, error: action.payLoad, fetching: false };
  } else if (action.type === ADDTOCART) {
    //Getting current state data
    const arr = state.cartData;
     //Checking if item already added to cart
    for (let i = 0; i < arr.length; i++) {
      if (Number(arr[i].id) === Number(action.payLoad.id)) {
        alert("Item already added to cart move to cart");
        return state;
      }
    }
    return { ...state, cartData: [...state.cartData, action.payLoad] };
  }
  else if(action.type === REMOVEFROMCART)
  {
    const newArr =  state.cartData.filter((val)=>(Number(val.id) !== Number(action.payLoad)));
    return {...state,cartData: newArr};
  }
  else if(action.type === CHECKOUTCART)
  {
    alert("Items has been checked out! Thank you");
    return {...state,cartData:[]};
  }
  return state;
};

export default shoppingReducer;
