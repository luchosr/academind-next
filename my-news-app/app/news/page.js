import Link from 'next/link';

const NewsPage = () => {
  return (
    <main>
      <h1>NewsPage</h1>

      <ul>
        <li>
          <Link href={'/news/first-news'}>First News Item</Link>
        </li>
        <li>
          <Link href={'/news/second-news'}>Second News Item</Link>
        </li>
        <li>
          <Link href={'/news/third-news'}>Third News Item</Link>
        </li>
      </ul>
    </main>
  );
};

export default NewsPage;
