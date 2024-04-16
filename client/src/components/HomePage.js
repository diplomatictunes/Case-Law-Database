import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <!-- Search Button -->
        <><div class="search-icon">
                <button>
                    <img src="search-icon.png" alt="Search"> < />!-- Replace 'search-icon.png' with your icon file -->
                    </></button>
            </div><div style={{
                display: 'flex',
                alignItems: 'center', // Vertical center alignment
                justifyContent: 'center', // Horizontal center alignment
                height: '100vh', // Full viewport height
                width: '100vw' // Full viewport width
            }}>
                    <section style={{
                        height: '250px',
                        width: '250px',
                        background: '#80CBC4',
                        borderRadius: '5px',
                        boxShadow: '0 0 15px 5px rgba(0, 0, 0, 0.3)', // Increased shadow size and opacity
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '10px'
                    }}>
                        <h1 style={{ color: '#8B1E3F', fontSize: '36px' }}>DataCase</h1> {/* Increased font size */}
                        <nav style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                            <Link to="/search-results" style={{ textDecoration: 'none', width: '100%' }}>
                                <button style={{
                                    margin: '5px 0',
                                    padding: '10px',
                                    width: '100%',
                                    fontSize: '1rem',
                                    backgroundColor: '#8B1E3F',
                                    color: '#FFFFFF',
                                    border: 'none',
                                    borderRadius: '10px',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.2s'
                                }}>Search Cases</button>
                            </Link>
                            <Link to="/submit-case" style={{ textDecoration: 'none', width: '100%' }}>
                                <button style={{
                                    margin: '5px 0',
                                    padding: '10px',
                                    width: '100%',
                                    fontSize: '1rem',
                                    backgroundColor: '#8B1E3F',
                                    color: '#FFFFFF',
                                    border: 'none',
                                    borderRadius: '10px',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.2s'
                                }}>Submit New Case</button>
                            </Link>
                        </nav>

                    </section>
                </div></>
    );
}
export default HomePage;
