import ProductCard from "@/app/_components/ProductCard";
import { TypeProducts } from "../_shared/shared";

function ProductList({ products }: TypeProducts) {
  return (
    <>
      {products.length > 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      ) : null}
    </>
  );
}

export default ProductList;
