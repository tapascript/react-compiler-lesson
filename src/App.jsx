import ProductPage from "./components/ProductPage";

function App() {
  const foodProducts = [
    {
      id: "001",
      name: "Hamburger",
      image: "🍔",
      featured: true,
    },
    {
      id: "002",
      name: "French Fries",
      image: "🍟",
      featured: false,
    },
    {
      id: "003",
      name: "Taco",
      image: "🌮",
      featured: false,
    },
    {
      id: "004",
      name: "Hot Dog",
      image: "🌭",
      featured: true,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl text-center p-4 m-4">React Compiler Lesson</h1>
      <ProductPage products={foodProducts} heading="The Food Products" />
    </div>
  );
}

export default App;
