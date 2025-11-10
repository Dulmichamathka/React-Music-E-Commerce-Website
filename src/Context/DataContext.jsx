import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // fetching all products from api
  const fetchAllProducts = async () => {
    try {
      const res = await fetch("/products.json");
      const productsData = await res.json(); // convert to JSON
      setData(productsData.products);
    } catch (error) {
      console.log(error);
    }
  };

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => {
      return curElem[property];
    });
    newVal = [...new Set(newVal)];
    return newVal;
  };

  const categoryOnlyData = getUniqueCategory(data, "category");

  return (
    <DataContext.Provider
      value={{ data, setData, fetchAllProducts, getUniqueCategory }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const getData = () => useContext(DataContext);
