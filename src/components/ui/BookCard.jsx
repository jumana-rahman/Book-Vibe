import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({ book }) => {
    return (
        <div>
            <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-sm p-3">
                <figure className='p-6 bg-base-200 rounded-xl'>
                    <img
                    src={book.image}
                    alt={book.bookName} 
                    className=' h-62.5'/>
                </figure>
                <div className="card-body">
                    <div className='flex gap-2'>
                        {
                            book.tags.map((tag, index) => (
                                <div key={index} className="badge text-green-500 bg-green-100 font-bold">{tag}</div>
                            ))
                        }
                    </div>
                    
                    <h2 className="card-title text-2xl">
                    {book.bookName}
                    </h2>
                    
                    <p className='text-[16px] font-medium'>By : {book.author}</p>
                    
                    <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4">
                        <div className="font-semibold">{book.category}</div>
                        <div className="flex items-center gap-1">{book.rating} <FaRegStar/></div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BookCard;