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

  return <div>{article.title}</div>;
}
