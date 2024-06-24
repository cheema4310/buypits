export default async function Articles() {
  let articles;
  // Fetch data from external API
  try {
    const res = await fetch('http://localhost:3000/api/articles');
    articles = await res.json();
  } catch (error) {
    console.log(error);
  }
  if (!articles) {
    return <div>No Articles are found</div>;
  }

  return <div>{articles.data[0].description}</div>;
}
