import { useEffect, useState } from "react";
import {
  getReadBookDataFromLocalStorage,
  getWishListBookDataFromLocalStorage,
} from "../../Utility/localStorage";
import { IoLocationOutline, IoPeopleOutline } from "react-icons/io5";
import { LuFileBarChart } from "react-icons/lu";
import { GoChevronDown } from "react-icons/go";
import { Link } from "react-router-dom";

const ListedBooks = () => {
  const [readListBookData, setReadListBookData] = useState();

  const [wishlistBookData, setWishlistBookData] = useState();

  useEffect(() => {
    const readData = getReadBookDataFromLocalStorage() || [];
    setReadListBookData(readData);
  }, []);

  useEffect(() => {
    const wishListData = getWishListBookDataFromLocalStorage() || [];
    setWishlistBookData(wishListData);
  }, []);

  const handleBooksSortBy = (readListSortBy) => {
    // e.preventDefault();
    if (readListSortBy === "Rating") {
      const sortedTotalReadListedBooks = [...readListBookData].sort(
        (a, b) => b.rating - a.rating
      );
      const sortedTotalWishListedBooks = [...wishlistBookData].sort(
        (a, b) => b.rating - a.rating
      );
      setReadListBookData(sortedTotalReadListedBooks);
      setWishlistBookData(sortedTotalWishListedBooks);
    } else if (readListSortBy === "PageNumber") {
      const sortedTotalReadListedBooks = [...readListBookData].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      const sortedTotalWishListedBooks = [...wishlistBookData].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setReadListBookData(sortedTotalReadListedBooks);
      setWishlistBookData(sortedTotalWishListedBooks);
    } else if (readListSortBy === "Year") {
      const sortedTotalReadListedBooks = [...readListBookData].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      const sortedTotalWishListedBooks = [...wishlistBookData].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setReadListBookData(sortedTotalReadListedBooks);
      setWishlistBookData(sortedTotalWishListedBooks);
    }
  };
  // console.log(wishlistBookData);
  // console.log(readListBookData);
  // console.log(totalListedBooks);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="border mt-9 mb-12 p-8 text-center bg-[#1313130D] rounded-lg">
        <h2 className="text-[#2d1111] text-4xl font-work font-bold">Books</h2>
      </div>
      {/* DropDown Start */}
      <div className="text-center mb-14">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#23BE0A] text-white text-lg font-work">
            Sort By<GoChevronDown className="text-xl"></GoChevronDown>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a onClick={() => handleBooksSortBy("Rating")}>Rating</a>
            </li>
            <li>
              <a onClick={() => handleBooksSortBy("PageNumber")}>
                Number of Pages
              </a>
            </li>
            <li>
              <a onClick={() => handleBooksSortBy("Year")}>Published Year</a>
            </li>
          </ul>
        </details>
      </div>
      {/* DropDown End */}
      <div>
        <div role="tablist" className="tabs-sm lg:tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab text-xl font-work font-medium"
            aria-label="Read Books"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box lg:p-6"
          >
            <div>
              {readListBookData && readListBookData.length === 0 && (
                <div className="text-center">
                  <h2 className="text-3xl font-playfair font-medium m-4">You have not selected any book for ReadList</h2>
                </div>
              )}
              {readListBookData &&
                readListBookData.map((data, idx) => (
                  <div key={idx}>
                      <div className="p-4 mb-8 rounded-lg flex flex-col lg:flex-row bg-base-100 shadow-2xl">
                        <div className="lg:w-1/4 flex justify-center p-8 bg-[#1313130D] rounded-lg border ">
                          <img src={data.image} alt="Book-Image" />
                        </div>
                        <div className="lg:w-3/4 p-4 ">
                          <h2 className="card-title font-playfair  lg:text-2xl font-bold mb-4">
                            {data.bookName}
                          </h2>
                          <p className="text-[#131313CC] text-center lg:text-left font-work font-medium mb-4">
                            By: {data.author}
                          </p>
                          <div className="flex flex-col lg:flex-row gap-4 items-center mb-5">
                            <p className="text-[#131313] font-work text-lg font-bold">
                              Tag
                            </p>
                            <button className="px-4 py-1 bg-[#23BE0A0D] rounded-full text-[#23BE0A] font-work">
                              #{data.tags[0]}
                            </button>
                            <button className="px-4 py-1 bg-[#23BE0A0D] rounded-full text-[#23BE0A] font-work">
                              #{data.tags[1]}
                            </button>
                            <p className="flex items-center gap-2 text-[#131313CC] font-work">
                              <IoLocationOutline></IoLocationOutline>Year of
                              publishing: {data.yearOfPublishing}
                            </p>
                          </div>
                          <div className="flex gap-4 mb-4">
                            <div className="flex items-center gap-2">
                              <IoPeopleOutline className="text-lg"></IoPeopleOutline>
                              <p className="text-[#13131399] font-work">
                                Publisher: {data.publisher}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <LuFileBarChart className="text-lg"></LuFileBarChart>
                              <p className="text-[#13131399] font-work">
                                Page: {data.totalPages}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div className="flex flex-col lg:flex-row gap-4 items-center mt-4">
                            <button className="px-4 py-1 bg-[#328EFF26] rounded-full text-[#328EFF] font-work">
                              Category:{data.category}
                            </button>
                            <button className="px-4 py-1 bg-[#FFAC3326] rounded-full text-[#FFAC33] font-work">
                              Rating:{data.rating}
                            </button>
                            <Link to={`/bookCard/${data.bookId}`}>
                              <button className="px-4 py-1 bg-[#23BE0A] rounded-full text-white font-work font-medium">
                                View Details
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                  </div>
                ))}
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab text-xl font-work font-medium"
            aria-label="Wishlist Books"
            // checked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box lg:p-6"
          >
            <div>
            {wishlistBookData && wishlistBookData.length === 0 && (
                <div className="text-center">
                  <h2 className="text-3xl font-playfair font-medium m-4">You have not selected any book for WishList</h2>
                </div>
              )}
              {wishlistBookData &&
                wishlistBookData.map((data, idx) => (
                  <div key={idx}>
                    <div className="p-4 mb-8 rounded-lg flex flex-col lg:flex-row bg-base-100 shadow-2xl">
                      <div className="lg:w-1/4 flex justify-center p-8 bg-[#1313130D] rounded-lg border ">
                        <img src={data.image} alt="Book-Image" />
                      </div>
                      <div className="lg:w-3/4 p-4">
                        <h2 className="card-title font-playfair text-2xl font-bold mb-4">
                          {data.bookName}
                        </h2>
                        <p className="text-[#131313CC] font-work font-medium mb-4">
                          By: {data.author}
                        </p>
                        <div className="flex flex-col lg:flex-row gap-4 items-center mb-5">
                          <p className="text-[#131313] font-work text-lg font-bold">
                            Tag
                          </p>
                          <button className="px-4 py-1 bg-[#23BE0A0D] rounded-full text-[#23BE0A] font-work">
                            #{data.tags[0]}
                          </button>
                          <button className="px-4 py-1 bg-[#23BE0A0D] rounded-full text-[#23BE0A] font-work">
                            #{data.tags[1]}
                          </button>
                          <p className="flex items-center gap-2 text-[#131313CC] font-work">
                            <IoLocationOutline></IoLocationOutline>Year of
                            publishing: {data.yearOfPublishing}
                          </p>
                        </div>
                        <div className="flex gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <IoPeopleOutline className="text-lg"></IoPeopleOutline>
                            <p className="text-[#13131399] font-work">
                              Publisher: {data.publisher}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <LuFileBarChart className="text-lg"></LuFileBarChart>
                            <p className="text-[#13131399] font-work">
                              Page: {data.totalPages}
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div className="flex flex-col lg:flex-row gap-4 items-center mt-4">
                          <button className="px-4 py-1 bg-[#328EFF26] rounded-full text-[#328EFF] font-work">
                            Category:{data.category}
                          </button>
                          <button className="px-4 py-1 bg-[#FFAC3326] rounded-full text-[#FFAC33] font-work">
                            Rating:{data.rating}
                          </button>
                          <Link to={`/bookCard/${data.bookId}`}>
                            <button className="px-4 py-1 bg-[#23BE0A] rounded-full text-white font-work font-medium">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
