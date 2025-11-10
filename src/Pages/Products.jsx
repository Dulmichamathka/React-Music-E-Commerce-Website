import React, { useEffect, useState } from "react";
import { getData } from "../Context/DataContext";
import FilterSection from "../Components/FilterSection";
import { DotLoader } from "react-spinners";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  const { data, fetchAllProducts } = getData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const start = Date.now();
      await fetchAllProducts();
      const elapsed = Date.now() - start;

      const minDelay = 800;
      setTimeout(() => setLoading(false), Math.max(0, minDelay - elapsed));
    };
    loadData();
  }, []);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        {loading || !data?.length ? (
          <div className="flex items-center justify-center h-[400px]">
            <DotLoader loading={true} size={50} color={"#990099"} />
          </div>
        ) : (
          <div>
            <FilterSection />
            <div className="grid grid-cols-4 gap-7 mt-10">
              {data?.map((product, index) => {
                return <ProductCard key={index} product={product} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
