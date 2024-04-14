import React from 'react';

function SearchResults({ results }) {
    return (
        <div>
            <h1>Search Results</h1>
            {results.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Case Name</th>
                            <th>Case Citation</th>
                            <th>Case Medium Neutral</th>
                            <th>Case Year</th>
                            <th>Case Court</th>
                            <th>Case Topic</th>
                            <th>Case Ratio</th>
                            <th>Case Notes</th>
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
                                <td>{result.case_topic}</td>
                                <td>{result.case_ratio}</td>
                                <td>{result.case_notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
}

export default SearchResults;
