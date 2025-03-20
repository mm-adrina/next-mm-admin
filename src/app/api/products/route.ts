import { NextResponse } from 'next/server';
import { Product } from '../../../types/product';

// Mock product data
const products: Product[] = [
  {
    id: 1,
    title: 'Premium Laptop XPS-15',
    description:
      'High-performance laptop with 15-inch display, Intel i9 processor, 32GB RAM, and 1TB SSD storage.',
    price: 1899.99,
    image:
      'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHFremRwb2dxazlndzFmNTNxYXVkcHljYnRmenRwb2VvMzZ5Z21sZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mIZ9rPeMKefm0/giphy.gif',
  },
  {
    id: 2,
    title: 'Wireless Noise-Cancelling Headphones',
    description:
      'Premium wireless headphones with active noise cancellation, 30-hour battery life, and premium sound quality.',
    price: 349.99,
    image:
      'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTFzeWwwdGNpbThqeHYyanlhYWFnbmE4eXNmcnUyZGRyYWs4azczeSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hB5Lpvi8pmg7K/giphy.gif',
  },
  {
    id: 3,
    title: 'Smart Fitness Watch',
    description:
      'Advanced fitness tracker with heart rate monitoring, GPS, sleep tracking, and 7-day battery life.',
    price: 199.99,
    image:
      'https://media.giphy.com/media/h1zJMhT5XOT927e0aw/giphy.gif?cid=790b7611e1syl0tcim8jxv2jyaaagna8ysfru2ddrak8k73y&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  },
  {
    id: 4,
    title: '4K Ultra HD Smart TV',
    description:
      '55-inch 4K smart TV with HDR, voice control, and streaming apps built-in.',
    price: 699.99,
    image:
      'https://media.giphy.com/media/tNC2rod1uTrdC/giphy.gif?cid=790b7611e1syl0tcim8jxv2jyaaagna8ysfru2ddrak8k73y&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  },
  {
    id: 5,
    title: 'Professional DSLR Camera',
    description:
      '24.2MP digital SLR camera with 18-55mm lens, 4K video recording, and advanced autofocus system.',
    price: 1299.99,
    image:
      'https://media.giphy.com/media/XFITRJv9IMhi0/giphy.gif?cid=790b7611e1syl0tcim8jxv2jyaaagna8ysfru2ddrak8k73y&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  },
  {
    id: 6,
    title: 'Portable Bluetooth Speaker',
    description:
      'Waterproof portable speaker with 20-hour battery life, deep bass, and 360-degree sound.',
    price: 129.99,
    image:
      'https://media.giphy.com/media/45XBooDP6oMpO/giphy.gif?cid=790b7611e1syl0tcim8jxv2jyaaagna8ysfru2ddrak8k73y&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  },
  {
    id: 7,
    title: 'Ergonomic Office Chair',
    description:
      'Adjustable office chair with lumbar support, breathable mesh back, and comfortable padding.',
    price: 249.99,
    image:
      'https://media.giphy.com/media/412L7BTm6IS2I/giphy.gif?cid=790b7611e1syl0tcim8jxv2jyaaagna8ysfru2ddrak8k73y&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  },
  {
    id: 8,
    title: 'Gaming Console Pro',
    description:
      'Next-generation gaming console with 1TB storage, 4K gaming, and includes two wireless controllers.',
    price: 499.99,
    image:
      'https://media.giphy.com/media/NtbFgpnaxFeNy/giphy.gif?cid=790b7611e1syl0tcim8jxv2jyaaagna8ysfru2ddrak8k73y&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  },
  {
    id: 9,
    title: 'Smartphone Ultra',
    description:
      'Latest smartphone with 6.7-inch OLED display, triple camera system, 5G connectivity, and all-day battery life.',
    price: 999.99,
    image:
      'https://media.giphy.com/media/9V5dlBnbjrPcruCVE6/giphy.gif?cid=ecf05e47w3kqgrlu6mmt29w41bsnb5fgcszfjrlz5c6fnmzv&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  },
  {
    id: 10,
    title: 'Smart Home Hub',
    description:
      'Central control unit for your smart home devices with voice control, scheduling, and automation features.',
    price: 149.99,
    image:
      'https://media.giphy.com/media/23UvgsnAh8LxS/giphy.gif?cid=ecf05e47x0eiwjnvh2iz0b5cgtem2p2e75n5d76tiokq8mz7&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  },
  {
    id: 11,
    title: 'Wireless Earbuds',
    description:
      'True wireless earbuds with active noise cancellation, sweat resistance, and up to 8 hours of listening time.',
    price: 179.99,
    image:
      'https://media.giphy.com/media/nEovVMM8Z5H6U/giphy.gif?cid=ecf05e47a6sm8gr58ek96q2vpidfrffrrfgsll0lb3ngjmve&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  },
  {
    id: 12,
    title: 'Robot Vacuum Cleaner',
    description:
      'Smart robot vacuum with mapping technology, scheduling, voice control, and automatic recharging.',
    price: 399.99,
    image:
      'https://media.giphy.com/media/t8IKNElbi8PyU/giphy.gif?cid=ecf05e47fs1cr1cpbje59vpysc67qcmw29mabof8kcw9d6up&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  },
];

export async function GET() {
  return NextResponse.json(products);
}
