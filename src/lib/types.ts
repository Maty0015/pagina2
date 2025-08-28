export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  imageUrl: string;
  imageHint: string;
  category: string;
  format: string;
  edition: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  slug: string;
  content: string;
  date: string;
  imageUrl: string;
  imageHint: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}
