'use server';

import connectDB from '@/lib/connectDB';
import Article from '@/models/Article';
import { redirect } from 'next/navigation';

export async function createArticle({ message }, formData) {
  // Parsing comma separated string into an array
  const parseCommaSeparatedString = (str) => {
    return str.split(',').map((item) => item.trim());
  };

  // getting the data from the form
  const title = formData.get('title');
  const category = formData.get('category');
  const description = formData.get('description');
  const image = formData.get('image');
  const overview = formData.get('overview');
  const pIdStr = formData.get('pids');

  // converting comma separated string to array
  const pids = parseCommaSeparatedString(pIdStr);

  // connect to the database
  await connectDB();
  // creating the product
  try {
    const newArticle = await Article.create({
      title,
      category,
      description,
      image,
      overview,
      products: pids,
    });
    // saving the product
    newArticle.save();
    // revalidate the path here if needed
  } catch (error) {
    console.log(error);
    return { message: 'error creating article' };
  }
  redirect('/');
}
