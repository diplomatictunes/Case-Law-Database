import React, { useState } from 'react';

function SubmitCaseForm() {
    const [formData, setFormData] = useState({
        caseName: '',
        caseCitation: '',
        // Other fields initialized similarly
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };


 const handleSubmit = (event) => {
        event.preventDefault();
        // Logic to submit data, such as an API call
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Input fields with onChange to update state */}
            <label htmlFor="caseName">Case Name:</label>
            <input type="text" id="caseName" name="caseName" required onChange={handleChange} value={formData.caseName} /><br/>
            {/* Other fields */}
            <button type="submit">Submit</button>
        </form>
    );
}

export default SubmitCaseForm;
