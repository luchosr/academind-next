import Link from 'next/link';

const MealsPage = () => {
  return (
    <main>
      <h1>This is a meals page</h1>
      <p>
        <Link href="/meals/recipe-1">click to go to recipe 1</Link>
      </p>
    </main>
  );
};

export default MealsPage;
