import { Link } from 'react-router-dom';
import bannerImage from '../../assets/images/banner.png'

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto hero min-h-screen bg-base-200 rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse lg:px-16">
       <div className='lg:w-1/2'>
       <img
          src={bannerImage}
          className=" rounded-lg"
        />
       </div>
        <div className='text-center lg:text-left'> 
          <h1 className="text-4xl lg:text-6xl font-playfair lg:leading-relaxed font-bold">Books to freshen <br /> up your bookshelf</h1>
          <p className="py-6 text-[#131313B3] font-playfair">
          Welcome to BooksPedia, where every book is a doorway to adventure, knowledge, and inspiration. Dive into our library and let the words on the pages transport you to new worlds, ignite your passions, and illuminate your mind.
          </p>
          <Link to="/booksListed"><button className="btn btn-primary font-work text-xl font-bold bg-[#23BE0A] outline-none border-none">View The List</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
