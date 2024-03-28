import Banner from "../Banner/Banner";
import BooksCard from "../BooksCardsContainer/BooksCards";

const Home = () => {
  return (
    <div>
      <div className="mt-12 mb-10 lg:mb-24">
        <Banner></Banner>
      </div>
      <div>
        <BooksCard></BooksCard>
      </div>
    </div>
  );
};

export default Home;
