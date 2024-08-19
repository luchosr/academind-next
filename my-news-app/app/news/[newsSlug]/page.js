const News = ({ params }) => {
  const newsId = params.newsSlug;
  return (
    <article>
      <h1>The news is {params.newsSlug}</h1>
      <p>News ID: {newsId}</p>
    </article>
  );
};

export default News;
