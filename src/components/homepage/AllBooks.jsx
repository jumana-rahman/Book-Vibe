import React, { use } from 'react';
import BookCard from '../ui/BookCard';

const booksPromise = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {
    const books = use(booksPromise);
    return (
        <div className='py-12'>
            <div className='container mx-auto'>
                <h2 className='text-center font-bold text-2xl'>Books</h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
                    {
                        books.map((book, index) => {
                            return (
                                <BookCard key={index} book={book}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default AllBooks;