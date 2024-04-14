import React, { useState } from 'react';

function SearchResults() {
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        try {
            const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`, {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        const data = await response.json();
        setResults(data);
    } catch (error) {
        console.error('Search failed:', error);
    }
};



    return (
        <div>
            <h1>Search Results</h1>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Enter search terms..."
            />
            <button onClick={handleSearch}>Search</button>
            {results.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Citation</th>
                            <th>Medium Neutral</th>
                            <th>Year</th>
                            <th>Court</th>
                            <th>Judges</th>
                            <th>Topic</th>
                            <th>Ratio</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map(result => (
                            <tr key={result.case_id}>
                                <td><a href={`/review/${result.case_id}`}>{result.case_name}</a></td>
                                <td>{result.case_citation}</td>
                                <td>{result.medium_neutral}</td>
                                <td>{result.case_year}</td>
                                <td>{result.case_court}</td>
                                <td>{result.case_judges}</td>
                                <td>{result.case_topic}</td>
                                <td>{result.case_ratio}</td>
                                <td>{result.case_notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : <p>No results found.</p>}
        </div>
    );
}

export default SearchResults;
