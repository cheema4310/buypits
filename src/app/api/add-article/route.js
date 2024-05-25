import connectDB from '@/lib/connectDB';
import Product from '@/models/Product';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();

  try {
    const products = await Product.find({});
    return NextResponse.json({ data: products });
  } catch (error) {
    return NextResponse.json(
      {
        message: 'An error occurred while fetching products',
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  await connectDB();

  try {
    const products = await Product.find({});
    return NextResponse.json({ data: products });
  } catch (error) {
    return NextResponse.json('Error getting users from backend');
  }
}
