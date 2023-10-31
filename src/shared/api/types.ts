export interface Category {
  id: number;
  name: string;
  productPlaceholder: string;
}

export interface Product {
  id: number;
  img?: string;
  name: string;
  category: number;
  price: number;
  unit: string;
}
