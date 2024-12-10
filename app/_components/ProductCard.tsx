import Image from "next/image";
import { TypeProduct } from "../_shared/shared";

type Props = {
  product: TypeProduct;
};

function ProductCard({ product }: Props) {
  const { title, price, image } = product;

  return (
    <div className="flex border-primary-800 border">
      <div className="flex-1 align-stretch relative">
        <Image
          src={image}
          fill
          alt={`Product ${title}`}
          className="flex-1 border-r border-primary-800 object-fit"
        />
      </div>

      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-primary-950">
          <h3 className="text-accent-500 font-semibold text-1xl mb-3">
            Product {title.substring(0, 20)}
          </h3>
          <p className="flex gap-3 justify-end items-baseline">
            <span className="text-1xl font-[350]">${price}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
