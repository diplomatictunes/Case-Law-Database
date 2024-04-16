import React from 'react';
import Link from 'next/link';

function HomePage() {
    return (
        <div style={{
            backgroundColor: 'var(--m-grey)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100vw',
            height: '100vh'
        }}>
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
                <h1 style={{ color: '#8B1E3F', fontSize: '36px' }}>DataCase</h1>
                <nav style={{ width: '100%' }}>
                    <Link href="/results" passHref>
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
                    <Link href="/form" passHref>
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
        </div>
    );
}

export default HomePage;
