export interface Product {
  id: number;
  name: string;
  price: {
    amount: number;
    currency: string;
  };
  image: string;
  description: string;
  highlights: string[];
}
