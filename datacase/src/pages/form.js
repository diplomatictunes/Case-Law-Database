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

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        // Example validation for case name
        if (!formData.caseName.trim()) {
            isValid = false;
            errors.caseName = 'Case name is required.';
        }

        // Add more validations as necessary
        if (!formData.caseCitation.trim()) {
            isValid = false;
            errors.caseCitation = 'Case citation is required.';
        }

        if (!formData.caseYear.trim() || isNaN(Number(formData.caseYear))) {
            isValid = false;
            errors.caseYear = 'Valid year is required.';
        }

        // Ensure judges are provided and formatted correctly
        if (!formData.caseJudges.trim() || !formData.caseJudges.includes(',')) {
            isValid = false;
            errors.caseJudges = 'List of judges must be comma-separated.';
        }

        setErrors(errors);
        return isValid;
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        // Optionally reset errors
        if (errors[event.target.name]) {
            setErrors({ ...errors, [event.target.name]: null });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) {
            alert('Please correct the errors in the form.');
            return;
        }

        try {
            const response = await axios.post('/api/submit_case', {
                caseData: {
                    name: formData.caseName,
                    citation: formData.caseCitation,
                    mediumNeutral: formData.caseMediumNeutral,
                    year: parseInt(formData.caseYear, 10),
                    court: formData.caseCourt,
                    topic: formData.caseTopic,
                    ratio: formData.caseRatio,
                    notes: formData.caseNotes
                },
                judgeNames: formData.caseJudges.split(',').map(judge => judge.trim())
            });
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
