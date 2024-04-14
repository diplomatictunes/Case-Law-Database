//Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/submit-case">
          <button>
            Submit Case
          </button>
        </Link>
        <Link to="/search-results">
          <button >
            Search Results
          </button>
        </Link>
        <a target="_blank" href="https://icons8.com/icon/45645/law-book">Law Book</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
      </nav>
    </header>
  );
}

export default Header;
