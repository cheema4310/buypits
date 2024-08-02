import connectDB from '@/lib/connectDB';
import Product from '@/models/Product';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const id = params.pId;

  await connectDB();

  try {
    const product = await Product.findOne({ _id: id });
    return NextResponse.json({ data: product });
  } catch (error) {
    return NextResponse.json(
      {
        message: 'No product found with this ID',
        error: error.message,
      },
      { status: 500 }
    );
  }
}
