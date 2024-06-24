import connectDB from '@/lib/connectDB';
import Article from '@/models/Article';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();

  try {
    const articles = await Article.find({});
    return NextResponse.json({ data: articles });
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
