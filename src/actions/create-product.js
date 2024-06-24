'use server';

import connectDB from '@/lib/connectDB';
import Product from '@/models/Product';
import { redirect } from 'next/navigation';

export async function createProduct({ message }, formData) {
  // Parsing comma separated string into an array
  const parseCommaSeparatedString = (str) => {
    return str.split(',').map((item) => item.trim());
  };
  // getting the data from the form
  const name = formData.get('name');
  const category = formData.get('category');
  const description = formData.get('description');
  const image = formData.get('image');
  const affLink = formData.get('affLink');
  const price = formData.get('price');
  const prosStr = formData.get('pros');
  const consStr = formData.get('cons');
  const featuresStr = formData.get('features');
  const rating = formData.get('rating');

  // converting comma separated string to array
  const pros = parseCommaSeparatedString(prosStr);
  const cons = parseCommaSeparatedString(consStr);
  const features = parseCommaSeparatedString(featuresStr);

  // connect to the database
  await connectDB();
  // creating the product
  try {
    const newProduct = await Product.create({
      name,
      category,
      description,
      image,
      affLink,
      price,
      pros,
      cons,
      features,
      rating,
    });

    // saving the product
    newProduct.save();
    // revalidate the path here if needed
  } catch (error) {
    console.log(error);
    return { message: 'error creating product' };
  }
  // redirect to the products page
  redirect('/');
}
