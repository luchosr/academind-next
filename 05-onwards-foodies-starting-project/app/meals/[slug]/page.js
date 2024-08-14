const MealSlug = ({ params }) => {
  return (
    <>
      <h1>MealSlug page</h1>
      <p>{params.slug}</p>
    </>
  );
};

export default MealSlug;
