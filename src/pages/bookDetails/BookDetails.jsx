import React, {useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookContext';

// const booksPromise = fetch('/booksData.json').then(res => res.json());

const BookDetails = () => {
    const {bookId: bookParamsId} = useParams();

    // const books = use(booksPromise);

    const books = useLoaderData();
    // console.log(books, "books");
    
    const expectedBook = books.find(book => book.bookId == bookParamsId);
    
    const {bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = expectedBook;

    const {handleMarkAsRead, handleWishList} = useContext(BookContext);


    return (
        <div className='container mx-auto my-5'>
            <div className="grid grid-cols-1 md:grid-cols-2 bg-base-100 shadow-sm">
                <figure className='flex items-center justify-center bg-gray-100 rounded-lg mx-15 my-5'>
                    <img
                    src={image}
                    alt={bookName} 
                    className='h-100'/>
                </figure>
                <div className="card-body space-y-2">
                    <h2 className="card-title text-2xl">{bookName}</h2>
                    
                    <h5 className='font-medium'>By : {author}</h5>

                    <p className='my-2 py-2 border-y border-gray-300 font-bold'>{category}</p>
                    
                    <p><span className='font-bold'>Review:</span> {review}</p>

                    <div className='flex gap-2 mt-4'>
                        {
                            tags.map((tag, index) => (
                                <div key={index} className="badge text-green-500 bg-green-100 font-bold">{tag}</div>
                            ))
                        }
                    </div>
                    
                    <div className="card-actions border-t border-gray-300 block py-2 space-y-2">
                        <div className='flex justify-between items-center gap-2'>
                            <span className='font-semibold'>Number of Pages: </span>
                            <span className='text-gray-700'>{totalPages}</span>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <span className='font-semibold'>Publisher: </span>
                            <span className='text-gray-700'>{publisher}</span>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <span className='font-semibold'>Release: </span>
                            <span className='text-gray-700'>{yearOfPublishing}</span>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <span className='font-semibold'>Rating: </span>
                            <span className='text-gray-700'>{rating}</span>
                        </div>
                        <div className='flex items-center gap-2 mt-5'>
                            <button onClick={() => handleMarkAsRead(expectedBook)} className="btn">Mark as Read</button>
                            
                            <button onClick={() => handleWishList(expectedBook)} className="btn btn-primary">Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;