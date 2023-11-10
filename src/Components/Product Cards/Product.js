import React from "react";
import { addToCart, removeFromCart } from "../../Redux/Action/action";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Product = ({ AddedToCart, Data, Error }) => {
  const { data } = useSelector((state) => state);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  //Function to add to cart
  function addDatatoCart(e) {
    let obj = "";
    for (let i = 0; i < data.length; i++) {
      if (Number(data[i].id) === Number( e.target.id)) {
        obj = data[i];
        break;
      }
    }

    dispatch(addToCart(obj));

    Navigate("/cart");
  }

  //Function to remove from cart
  function removeDatafromCart(e) {
    dispatch(removeFromCart(e.target.id));
  }

  return (
    <div className="Product">
      {Error && <p>{Error.message}</p>}
      <div className="cards">
        {Data &&
          Data.map((val) => (
            <div className="card" key={val.id}>
              <img src={val.images[0]}></img>
              <p>Title : {val.title}</p>
              <p>Price : ${val.price}</p>
              {AddedToCart ? (
                <button id={val.id} onClick={removeDatafromCart}>
                  Remove from cart
                </button>
              ) : (
                <button id={val.id} onClick={addDatatoCart}>
                  Add to cart
                </button>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Product;
