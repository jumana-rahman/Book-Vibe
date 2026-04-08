import React from 'react';
import BannerImage from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='container mx-auto mt-3'>
            <div className="hero bg-base-200 min-h-[70vh] rounded-2xl">
            <div className="hero-content flex-col lg:flex-row-reverse w-full justify-evenly">
                <img
                src={BannerImage}
                />
                <div>
                <h1 className="text-7xl font-bold mb-8">Books to freshen <br/> up your bookshelf</h1>
                <button className="btn bg-green-500 text-white">View the List</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;