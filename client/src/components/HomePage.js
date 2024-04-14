import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Welcome to Our Service</h1>
            <Link to="/search-results"><button>Search Cases</button></Link>
            <Link to="/submit-case"><button>Submit New Case</button></Link>
        </div>
    );
}

export default HomePage;
