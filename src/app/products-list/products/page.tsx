import React from 'react';
import { Product } from '../../../types/product';
import ProductsClientWrapper from './clientWrapper';

export default async function ProductsPage() {
  const { products, error } = await getProducts();

  return <ProductsClientWrapper products={products} error={error} />;
}

async function getProducts(): Promise<{ products: Product[]; error?: string }> {
  try {
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const host = process.env.VERCEL_URL || 'localhost:3000';
    const url = `${protocol}://${host}/api/products`;

    const res = await fetch(url, {
      cache: 'no-store',
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    const products = await res.json();
    return { products };
  } catch (error) {
    console.error('Error loading products:', error);
    return {
      products: [],
      error:
        error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
}
