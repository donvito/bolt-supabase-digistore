import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Product } from '../types/product';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error: supabaseError } = await supabase
          .from('dstore_products')
          .select('*');

        if (supabaseError) throw supabaseError;
        if (!data) throw new Error('No products found');

        const formattedProducts: Product[] = data.map(product => ({
          id: product.id,
          title: product.title,
          description: product.description,
          price: Number(product.price),
          type: product.type.toLowerCase() as 'video' | 'pdf',
          thumbnail: product.thumbnail,
          categories: product.categories,
          category_id: null,
          created_at: new Date().toISOString()
        }));

        setProducts(formattedProducts);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err instanceof Error ? err : new Error('Failed to fetch products'));
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { products, loading, error };
}