"use client";

import ProductList from "./_components/ProductList";
import Spinner from "./_components/Spinner";
import { useState, useEffect } from "react";

export default function Page() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setData(data.products);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <Spinner />;
  if (!data) return <p>No data</p>;

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">Welcome!</h1>
      <p className="text-primary-200 text-lg mb-10">
        Discover the latest and most innovative gadgets at The Online store! From smart tech and
        accessories to everyday essentials, we offer cutting-edge products that make life easier,
        more fun, and more connected. Shop now and elevate your tech game!
      </p>
      <ProductList products={data} />
    </div>
  );
}
