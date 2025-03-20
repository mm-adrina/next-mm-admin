'use client';

import React from 'react';
import {
  Text,
  Image,
  useColorModeValue,
  Heading,
  Card,
  CardBody,
  Stack,
  Spinner,
  Center,
} from '@chakra-ui/react';
import { Product } from '../../types/product';

export default function ProductCardClient({ product }: { product: Product }) {
  const boxBg = useColorModeValue('white', 'navy.700');
  const textColor = useColorModeValue('navy.700', 'white');
  const secondaryColor = useColorModeValue('gray.500', 'white');

  return (
    <Card maxW="sm" bg={boxBg} boxShadow="md" borderRadius="lg">
      <CardBody>
        <Center mb={4} h="200px" position="relative">
          <Image
            src={product.image}
            alt={product.title}
            borderRadius="lg"
            objectFit="contain"
            maxH="200px"
            fallback={<Spinner />}
          />
        </Center>
        <Stack mt="6" spacing="3">
          <Heading size="md" color={textColor} noOfLines={2}>
            {product.title}
          </Heading>
          <Text color={secondaryColor} fontSize="sm" noOfLines={3}>
            {product.description}
          </Text>
          <Text color={textColor} fontSize="2xl" fontWeight="bold">
            ${product.price.toFixed(2)}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
