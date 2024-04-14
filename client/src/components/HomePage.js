import React from 'react';
import { Link } from 'react-router-dom';
function HomePage() {
    return (
        <div className="flex myblue justify-center items-center h-screen">
            <div className="w-full max-w-md bg-gray-300 shadow-lg rounded overflow-hidden p-8">
                <h1 className="text-3xl font-bold mb-4 text-center">DataCase</h1>
                <div className="flex justify-between">
                    <Link to="/search-results">
                        <button className="bg-mygreen hover:bg-teal-500 focus:shadow-outline focus:outline-none text-mycream py-2 px-4 rounded mr-2">
                            Search Cases
                        </button>
                    </Link>
                    <Link to="/submit-case">
                        <button className="bg-mygreen hover:bg-teal-500 focus:shadow-outline focus:outline-none text-mycream py-2 px-4 rounded">
                            Submit New Case
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}


export default HomePage;
