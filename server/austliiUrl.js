// austliiUrl.js

// Define getAustLiiUrl function to generate AustLII URL
function getAustLiiUrl(mediumNeutral) {
    // Split mediumNeutral into parts
    const parts = mediumNeutral.split(' ');
    // Extract year and case number
    const year = parts[0].slice(1, -1); // Remove brackets
    const courtCode = parts[1];
    const caseNumber = parts[2];

    // Generate URL based on court code
    let baseUrl;
    if (courtCode === 'HCA') {
        baseUrl = 'https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/HCA/';
    } else if (courtCode === 'FWC') {
        baseUrl = 'https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/FWC/';
    }

    // Construct full URL
    const fullUrl = `${baseUrl}${year}/${caseNumber}.html`;
    return fullUrl;
}

// Export the function to make it accessible in other files
module.exports = getAustLiiUrl;
