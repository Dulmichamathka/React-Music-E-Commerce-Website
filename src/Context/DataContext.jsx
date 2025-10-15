import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);
export const DataProvider = ({ children }) => {
  const [data, setData] = useState();
  // fetching all product from api

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/products");
      console.log(res);
      const productsData = res.data;
      setData(productsData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DataContext.Provider value={{ data, setData, fetchAllProducts }}>
      {children}
    </DataContext.Provider>
  );
};

export const getData = () => useContext(DataContext);
