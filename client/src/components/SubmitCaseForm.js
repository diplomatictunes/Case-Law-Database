import React, { useState } from 'react';
import axios from 'axios';

function SubmitCaseForm() {
    const [formData, setFormData] = useState({
        caseName: '',
        caseCitation: '',
        caseMediumNeutral: '',
        caseYear: '',
        caseCourt: '',
        caseJudges: '',
        caseTopic: '',
        caseRatio: '',
        caseNotes: ''
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/submit_case', formData);
            console.log('Case submitted:', response.data);
            alert('Case submitted successfully!');
        } catch (error) {
            console.error('Failed to submit case:', error);
            alert('Failed to submit case.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="caseName">Case Name:</label>
            <input type="text" id="caseName" name="caseName" required onChange={handleChange} value={formData.caseName} /><br/>

            <label htmlFor="caseCitation">Case Citation:</label>
            <input type="text" id="caseCitation" name="caseCitation" required onChange={handleChange} value={formData.caseCitation} /><br/>

            <label htmlFor="caseMediumNeutral">Case Medium Neutral:</label>
            <input type="text" id="caseMediumNeutral" name="caseMediumNeutral" required onChange={handleChange} value={formData.caseMediumNeutral} /><br/>

            <label htmlFor="caseYear">Case Year:</label>
            <input type="text" id="caseYear" name="caseYear" required onChange={handleChange} value={formData.caseYear} /><br/>

            <label htmlFor="caseCourt">Case Court:</label>
            <input type="text" id="caseCourt" name="caseCourt" required onChange={handleChange} value={formData.caseCourt} /><br/>

            <label htmlFor="caseJudges">Case Judges (comma-separated):</label>
            <input type="text" id="caseJudges" name="caseJudges" required onChange={handleChange} value={formData.caseJudges} /><br/>

            <label htmlFor="caseTopic">Case Topic:</label>
            <input type="text" id="caseTopic" name="caseTopic" required onChange={handleChange} value={formData.caseTopic} /><br/>

            <label htmlFor="caseRatio">Case Ratio:</label>
            <input type="text" id="caseRatio" name="caseRatio" required onChange={handleChange} value={formData.caseRatio} /><br/>

            <label htmlFor="caseNotes">Case Notes:</label>
            <textarea id="caseNotes" name="caseNotes" rows="4" required onChange={handleChange} value={formData.caseNotes}></textarea><br/>

            <button type="submit">Submit</button>
        </form>
    );
}

export default SubmitCaseForm;
