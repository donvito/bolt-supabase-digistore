import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    title: 'Complete Web Development Guide 2024',
    description: 'Master modern web development with this comprehensive guide covering React, Node.js, and more.',
    price: 49.99,
    type: 'pdf',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600',
    categories: ['Web Development', 'Programming'],
  },
  {
    id: '2',
    title: 'Advanced JavaScript Patterns',
    description: 'Deep dive into advanced JavaScript patterns and best practices with practical examples.',
    price: 79.99,
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=600',
    categories: ['JavaScript', 'Programming'],
  },
  {
    id: '3',
    title: 'UI/UX Design Principles',
    description: 'Learn essential UI/UX design principles and create beautiful user experiences.',
    price: 39.99,
    type: 'pdf',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600',
    categories: ['Design', 'UI/UX'],
  },
];