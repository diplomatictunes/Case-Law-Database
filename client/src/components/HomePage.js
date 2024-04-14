import React from 'react';
import { Link } from 'react-router-dom';
function HomePage() {
    return (
        <div>
            <div>
                <h1>DataCase</h1>
                <div>
                    <Link to="/search-results">
                        <button>
                            Search Cases
                        </button>
                    </Link>
                    <Link to="/submit-case">
                        <button>
                            Submit New Case
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}


export default HomePage;
