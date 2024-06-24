import connectDB from '@/lib/connectDB';
import Product from '@/models/Product';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();

  try {
    const products = await Product.find({});

    if (!products) {
      return NextResponse.json(
        { error: 'Products not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: products });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Error getting products' },
      { status: 500 }
    );
  }
}

// export async function POST(request) {
//   await connectDB();

//   const {
//     name,
//     category,
//     description,
//     image,
//     affLink,
//     price,
//     pros,
//     cons,
//     features,
//     rating,
//   } = await request.json();

//   const product = new Product({
//     name,
//     category,
//     description,
//     image,
//     affLink,
//     price,
//     pros,
//     cons,
//     features,
//     rating,
//   });
//   try {
//     await product.save();
//     return NextResponse.json({ data: product });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: 'Error creating product' },
//       { status: 500 }
//     );
//   }
// }

export async function DELETE(request) {
  await connectDB();

  const { id } = await request.json();

  try {
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ data: product });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Error deleting product' },
      { status: 500 }
    );
  }
}
