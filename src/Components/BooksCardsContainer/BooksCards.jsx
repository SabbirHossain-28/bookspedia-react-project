import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const BooksCards = () => {
    const [booksData,setBooksData]=useState([]);

    useEffect(()=>{
        fetch('../../../public/books.json')
        .then(res =>res.json())
        .then(data => setBooksData(data))
    },[])

    return (
        <div className="max-w-7xl mx-auto">
            <div className="lg:mb-10 text-center">
            <h2 className="text-[#131313] text-5xl font-bold font-playfair">Books</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 p-4 lg:p-0 gap-6">
                {
                    booksData.map((bookData,idx)=><BookCard key={idx} bookData={bookData}></BookCard>)
                }
            </div>
        </div>
    );
};

export default BooksCards;