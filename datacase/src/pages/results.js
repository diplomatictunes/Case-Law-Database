import React, { useState } from 'react';
import "./results.css"

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
        <div style={{
            backgroundColor: 'var(--m-grey)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100vw',
            height: '100vh'
        }}>
            <h1>Search</h1>
            <section style={{
                height: '400px',
                width: '400px',
                background: '#80CBC4',
                borderRadius: '5px',
                boxShadow: '0 0 15px 5px rgba(0, 0, 0, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px'
            }}>

            <div class="group">
                <input type="text"/>
                <span class="highlight"></span>
                <span class="bar"></span>
                <label for="query">Query</label>
            </div>
            <button
                style={{
                    width: "50%",
                    padding: "10px"
                }}
                onClick={handleSearch}
                >
                Search
            </button>
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
                ) : (
                    <p>...</p>
                )}
            </section>
        </div>
    );
}

export default SearchResults;
