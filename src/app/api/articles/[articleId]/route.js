import connectDB from '@/lib/connectDB';
import Article from '@/models/Article';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const id = params.articleId;
  console.log(id);

  await connectDB();

  try {
    const article = await Article.findOne({ _id: id });
    return NextResponse.json({ data: article });
  } catch (error) {
    return NextResponse.json(
      {
        message: 'No Article found with this ID',
        error: error.message,
      },
      { status: 500 }
    );
  }
}
