import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link'

function CaseDetails({ initialCaseDetails }) {
    const [caseDetails, setCaseDetails] = useState(initialCaseDetails);
    const [error, setError] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            fetch(`/api/review/${id}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    setCaseDetails(data);
                })
                .catch(error => {
                    console.error('Error fetching case details:', error);
                    setError(error.message);
                });
        }
    }, [id]); // Dependency array ensures fetch reruns if id changes

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!caseDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Case Details</h1>
            <ul>
                <li><strong>Case Name:</strong> {caseDetails.case_name}</li>
                <li><strong>Case Citation:</strong> {caseDetails.case_citation}</li>
                <li><strong>Case Medium Neutral:</strong> {caseDetails.medium_neutral}</li>
                <li><strong>Case Year:</strong> {caseDetails.case_year}</li>
                <li><strong>Case Court:</strong> {caseDetails.case_court}</li>
                <li><strong>Case Topic:</strong> {caseDetails.case_topic}</li>
                <li><strong>Case Ratio:</strong> {caseDetails.case_ratio}</li>
                <li><strong>Case Notes:</strong> {caseDetails.case_notes}</li>
            </ul>
            {caseDetails.medium_neutral && (
                <div>
                    <h2>Medium Neutral</h2>
                    <iframe src={getAustLiiUrl(caseDetails.medium_neutral)} width="100%" height="600px"></iframe>
                </div>
            )}
            <Link href="/"Back to Search Link />
        </div>
    );
}

// Function to generate URLs, assumed imported or defined elsewhere
function getAustLiiUrl(mediumNeutral) {
    return `https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/${mediumNeutral}`;
}

export async function getServerSideProps(context) {
    const { id } = context.query;
    try {
        const res = await fetch(`YOUR_API_URL_HERE/${id}`);
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const initialCaseDetails = await res.json();
        return {
            props: {
                initialCaseDetails,
            },
        };
    } catch (error) {
        console.error('Error fetching case details:', error);
        return {
            props: {
                initialCaseDetails: null,
            },
        };
    }
}

export default CaseDetails;
