import { useRouter } from 'next/router';
import Case from '../../components/Case'; // Assuming you have a component for case 

export default function CasePage() {
    const router = useRouter();
    const { citation } = router.query;

    // Pass citation to the Case component
    return <Case citation={citation} />;
}


// components/Case.js

import { useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch'; // You can use fetch or any other HTTP library

function Case({ citation }) {
    const [caseDetails, setCaseDetails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchCaseDetails() {
            try {
                const res = await fetch(`/api/case/${citation}`); // Adjust the API route as per your setup
                if (!res.ok) {
                    throw new Error('Failed to fetch case details');
                }
                const data = await res.json();
                setCaseDetails(data);
            } catch (err) {
                setError(err.message);
            }
        }

        fetchCaseDetails();
    }, [citation]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!caseDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Case </h1>
            {/* Display case details */}
        </div>
    );
}

export default Case;
