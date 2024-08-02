import Image from 'next/image';

export default async function Article({ params }) {
  const articleId = params.slug;
  let article;
  try {
    const response = await fetch(
      `http://localhost:3000/api/articles/${articleId}`
    );
    const data = await response.json();
    article = data.data;
  } catch (error) {
    console.log(error);
  }

  let allProducts = [];
  // fetch products from the api
  article.products.forEach(async (product) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/products/${product}`
      );
      const data = await response.json();
      allProducts.push(data.data);
    } catch (error) {
      console.log(error);
    }
  });
  console.log(allProducts);

  return (
    <div>
      {/* article header */}
      <div>
        <div className="heading-5xl">{article.title}</div>
        <div className="heading-2xl">{article.description}</div>
      </div>
      {/* article body */}
      <div>
        <div className="">
          <Image
            src={article.image}
            width={600}
            height={600}
            alt="Picture of the leggings"
          />
        </div>
        <div>{article.overview}</div>
      </div>
      {/* article Listing */}
      <div>
        {allProducts.map((product) => (
          <div key={product._id}>
            <div>{product.name}</div>
            <div>{product.description}</div>
            <div>{product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
