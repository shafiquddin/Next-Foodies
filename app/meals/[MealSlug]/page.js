const MealsDetails = async ({ params }) => {
  const { slug } = await params;
  return (
    <>
      <h1 style={{ color: "white", textAlign: "center" }}>Meals Details</h1>
      <p>{slug}</p>
    </>
  );
};

export default MealsDetails;
