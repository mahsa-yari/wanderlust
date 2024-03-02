export interface Product {
  id: string;
  name: string;
  price: {
    amount: number;
    currency: string;
  };
  image: string;
  description: string;
  highlights: string[];
}
