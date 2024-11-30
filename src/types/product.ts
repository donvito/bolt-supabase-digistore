export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  type: 'video' | 'pdf';
  thumbnail: string;
  categories: string[];
  category_id: number | null;
  created_at: string;
}