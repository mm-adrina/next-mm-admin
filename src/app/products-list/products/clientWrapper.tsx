'use client';

import React from 'react';
import { Box, SimpleGrid, Text, Flex, Heading } from '@chakra-ui/react';
import { Product } from '../../../types/product';
import ProductCardClient from '../../../components/productCardClient/ProductCardClient';

export default function ProductsClientWrapper({
  products,
  error,
}: {
  products: Product[];
  error?: string;
}) {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Flex direction="column" mb="40px">
        <Heading as="h1" size="xl" color="navy.700" mb={4}>
          Products
        </Heading>
        <Text color="gray.500">Browse our wonderful collection of products</Text>
      </Flex>

      {error ? (
        <Text color="red.500">Error loading products: {error}</Text>
      ) : products.length === 0 ? (
        <Text>No products found</Text>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing="20px">
          {products.map((product) => (
            <ProductCardClient key={product.id} product={product} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}
