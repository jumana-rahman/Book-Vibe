import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../ui/BookCard';

const ListedWishList = ({ sortingType }) => {
    const {wishList} = useContext(BookContext);

    const [filteredWishList, setFilteredWishList] = useState(wishList);
    
        useEffect(() => {
            if(sortingType){
                if(sortingType === 'pages'){
                    const sortedData = [...wishList].sort(
                        (a,b) => a.totalPages - b.totalPages,
                    );
                    setFilteredWishList(sortedData);
                }
                else if(sortingType === 'rating'){
                    const sortedData = [...wishList].sort(
                        (a,b) => a.rating - b.rating,
                    );
                    setFilteredWishList(sortedData);
                }
            }
        }, [sortingType, wishList])

    if(filteredWishList.length === 0){
        return <div className='h-[50vh] bg-gray-100 flex flex-col items-center justify-center'>
            <h2 className='font-bold text-3xl'>Wishlist is Empty.</h2>
            <p className='text-xl'>Select items to add here.</p>
        </div>
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-2'>
                {
                    filteredWishList.map((book, index) => (
                        <BookCard key={index} book={book}/>
                    ))
                }
            </div>
        </div>
    );
};

export default ListedWishList;