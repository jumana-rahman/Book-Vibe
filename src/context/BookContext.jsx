import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { addReadListToLocalDB, getAllReadListFromLocalDB, addWishListToLocalDB,  getAllWishListFromLocalDB} from '../utils/localDB';

export const BookContext = createContext();

const BookProvider = ({children}) => {
    const [storedBooks, setStoredBooks] = useState(() => getAllReadListFromLocalDB());
    const [wishList, setWishList] = useState(() => getAllWishListFromLocalDB());

    // useEffect(() => {
    //     const getReadListFromLocalDB = getAllReadListFromLocalDB();
    //     setStoredBooks(getAllReadListFromLocalDB);
    // })

    const handleMarkAsRead = (currentBook) => {
        // Step 1: store book id or book object
        // Step 2: where to store
        // Step 2: format: array or collection
        // Step 3: if the book already exists then show alert or toast
        // Step 4: if not then add the book in array or collection

        addReadListToLocalDB(currentBook);

        const isExistBook = storedBooks.find(book => book.bookId === currentBook.bookId)
        if(isExistBook){
            toast.error("Book already marked as read");
        }
        else{
            setStoredBooks([...storedBooks, currentBook]);
            toast.success(`${currentBook.bookName} is added as marked`);
        }
    }

    const handleWishList = (currentBook) => {
        // Step 1: store book id or book object
        // Step 2: where to store
        // Step 2: format: array or collection
        // Step 3: if the book already exists then show alert or toast
        // Step 4: if not then add the book in array or collection

        addWishListToLocalDB(currentBook);

        const isExistInReadList = storedBooks.find((book) => book.bookId === currentBook.bookId);

        if(isExistInReadList){
            toast.error("This book already marked as read");
            return;
        }
        
        const isExistBook = wishList.find((book) => book.bookId === currentBook.bookId)
        if(isExistBook){
            toast.error("Book already added in wishlist");
        }
        else{
            setWishList([...wishList, currentBook]);
            toast.success(`${currentBook.bookName} is added to wishlist`);
        }
    }

    const data = {
        storedBooks,
        setStoredBooks,
        handleMarkAsRead,
        wishList,
        setWishList,
        handleWishList
    }

    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;