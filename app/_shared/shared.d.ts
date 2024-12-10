export interface TypeProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
}

export interface TypeProducts {
  products: TypeProduct[];
}
