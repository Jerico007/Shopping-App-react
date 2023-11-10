import React from "react";
import Product from "./Product Cards/Product";
import { checkoutCart } from "../Redux/Action/action";
import { useSelector,useDispatch } from "react-redux";
const CartPage = () => {
  const { cartData, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  let total = 0;

  function checkOutCartEvent(){
      dispatch(checkoutCart());
  }

  return (
    <div className="CartPage">
      {cartData.length === 0 ? <h1>Your cart is empty!</h1> : <h1>My Cart</h1>}
      {cartData.length > 0 ? (
        <div className="cart-details">
          <Product AddedToCart={true} Data={cartData} Error={error} />
          <div className="check-out">
            <p>Checkout List</p>
            <div className="check-list-items">
              {cartData &&
                cartData.map((val) => {
                  total += Number(val.price);
                  return (
                    <div className="Item">
                      <p className="Item-name">1.{val.title}</p>
                      <p className="Item-price">${val.price}</p>
                    </div>
                  );
                })}
            </div>
            <div className="total">
                <p>Total</p>
                <p>${total}</p>
              </div>
              <button className="checkout-btn" onClick={checkOutCartEvent}>Checkout</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CartPage;
