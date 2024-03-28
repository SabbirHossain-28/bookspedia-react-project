import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";

const BookCard = ({ bookData }) => {
  const { bookId,image,tags,bookName,author,category } = bookData;
  const [tag1,tag2]=tags;
  return (
    <Link to={`/bookCard/${bookId}`}>
      <div className="card card-compact bg-base-100 shadow-2xl">
        <div className="p-4">
        <figure className="h-64 bg-[#F3F3F3] lg:p-8 rounded-lg">
          <img
            src={image}
            alt="book-image "
          />
        </figure>
        <div className="mt-6 flex gap-2 font-work font-medium">
            <button className="px-4 py-1 bg-[#23BE0A0D] rounded-full text-[#23BE0A]">{tag1}</button>
            <button className="px-4 py-1 bg-[#23BE0A0D] rounded-full text-[#23BE0A]">{tag2}</button>
        </div>
        </div>
        <div className="p-4">
          <div className="mb-5">
          <h2 className="card-title text-[#131313] font-playfair text-xl font-bold">{bookName}</h2>
          <p className="text-[#131313CC] font-work font-medium">By: <span>{author}</span></p>
          </div>
          <div className="flex justify-between border-t-2 border-dashed mb-5">
            <p className="mt-5 text-[#131313CC] font-work font-medium">{category}</p>
            <p className="mt-5 flex items-center justify-end gap-2 text-[#131313CC] font-work font-medium">5.00 <FaRegStar></FaRegStar></p>
          </div>
        </div>
      </div>
    </Link>
  );
};

BookCard.propTypes = {
  bookData: PropTypes.object,
};

export default BookCard;
