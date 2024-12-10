export interface TypeProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export interface TypeProducts {
  products: TypeProduct[];
}
