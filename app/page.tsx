import ProductList from "./_components/ProductList";
import { Suspense } from "react";
import Spinner from "./_components/Spinner";
import { getProducts } from "./_lib/actions";

export const metadata = {
  title: "Products",
};

export default async function Page() {
  const products = await getProducts();

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">The Online Store</h1>
      <p className="text-primary-200 text-lg mb-10">
        Discover the latest and most innovative gadgets at The Online store! From smart tech and
        accessories to everyday essentials, we offer cutting-edge products that make life easier,
        more fun, and more connected. Shop now and elevate your tech game!
      </p>
      <Suspense fallback={<Spinner />}>
        <ProductList products={products} />
      </Suspense>
    </div>
  );
}
