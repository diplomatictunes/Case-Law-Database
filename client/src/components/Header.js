//Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-myblue py-0">
      <nav className="flex justify-center">
        <Link to="/submit-case" className="mr-4">
          <button className="bg-mygree hover:bg-mycream text-mycream font-bold py-2 px-4 rounded">
            Submit Case
          </button>
        </Link>
        <Link to="/search-results">
          <button className="bg-mygree hover:bg-mycream text-mycream font-bold py-2 px-4 rounded">
            Search Results
          </button>
        </Link>
        <a target="_blank" href="https://icons8.com/icon/45645/law-book">Law Book</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
      </nav>
    </header>
  );
}

export default Header;
