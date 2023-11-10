import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, getShopData } from "../Redux/Action/action";
import Product from "./Product Cards/Product";
const HomePage = () => {
  const dispatch = useDispatch();

  const { fetching, data, error } = useSelector((state) => state);

  
  useEffect(() => {
    //Prevent Api calling if data already exist
    if (data.length > 0) {
      dispatch(getShopData(data));
    } else {
      dispatch(fetchData());
    }
  }, []);

  
  return (
    <div className="HomePage">
      <h1>All Items</h1>
      {fetching ? (
        <div>Loading...</div>
      ) : (
        <Product AddedToCart={false} Data={data} Error={error} />
      )}
    </div>
  );
};

export default HomePage;
