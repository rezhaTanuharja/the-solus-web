import "../css/Home.css";
import ProductCard from "../components/ProductCard";

import chapter1Image from "../images/chapter_1.png";

function Home() {
  const products = [
    { id: 1, title: "Chapter 1", price: "200000", poster: chapter1Image },
    { id: 2, title: "Chapter 2", price: "250000", poster: chapter1Image },
  ];

  return (
    <div className="home">
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
