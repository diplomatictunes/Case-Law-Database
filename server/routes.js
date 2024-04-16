const express = require('express');
const router = express.Router();
const db = require('./database');

// Function to generate AustLii URLs based on medium neutral
function getAustLiiUrl(mediumNeutral) {
    if (mediumNeutral) {
        // Assuming format: "[Year] Court Abbreviation Case Number"
        const parts = mediumNeutral.split(' ');
        const year = parts[0].slice(1, -1);
        const courtAbbreviation = parts[1];
        const caseNumber = parts[2];
        return `https://www.austlii.edu.au/cgi-bin/viewdoc/au/cases/${courtAbbreviation}/${year}/${caseNumber}.html`;
    }
    return '';
}

// API endpoint for submitting a case form
router.post('/submit_case', function(req, res) {
    console.log("Received request to /submit_case");
    const { caseName, caseCitation, caseMediumNeutral, caseYear, caseCourt, caseJudges, caseTopic, caseRatio, caseNotes } = req.body;

    // Insert the case details into the 'cases' table
    const caseSql = `INSERT INTO cases (case_name, case_citation, medium_neutral, case_year, case_court, case_topic, case_ratio, case_notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    db.query(caseSql, [caseName, caseCitation, caseMediumNeutral, caseYear, caseCourt, caseTopic, caseRatio, caseNotes], function(err, result) {
        if (err) {
            console.error('Error inserting case:', err);
            return res.status(500).send('Internal Server Error');
        }

        // Process judges and associate them with the case
        const caseId = result.insertId;
        const judgeNames = caseJudges.split(',').map(judge => judge.trim());
        const insertValues = [];
        judgeNames.forEach(judgeName => {
            const judgeQuery = `SELECT * FROM judges WHERE judge_name = ?`;
            db.query(judgeQuery, [judgeName], function(err, judgeResult) {
                if (err) {
                    console.error('Error querying judge:', err);
                    return res.status(500).send('Internal Server Error');
                }

                let judgeId;
                if (judgeResult.length > 0) {
                    judgeId = judgeResult[0].judge_id;
                } else {
                    const insertJudgeSql = `INSERT INTO judges (judge_name) VALUES (?)`;
                    db.query(insertJudgeSql, [judgeName], function(err, insertJudgeResult) {
                        if (err) {
                            console.error('Error inserting judge:', err);
                            return res.status(500).send('Internal Server Error');
                        }
                        judgeId = insertJudgeResult.insertId;
                    });
                }
                insertValues.push([caseId, judgeId]);

                if (insertValues.length === judgeNames.length) {
                    const caseJudgeSql = `INSERT INTO case_judges (case_id, judge_id) VALUES ?`;
                    db.query(caseJudgeSql, [insertValues], function(err, caseJudgeResult) {
                        if (err) {
                            console.error('Error inserting case-judge association:', err);
                            return res.status(500).send('Internal Server Error');
                        }
                        res.status(201).json({ message: 'Case and judges submitted successfully', caseId: caseId });
                    });
                }
            });
        });
    });
});

// API endpoint for searching cases
router.get('/search', (req, res) => {
    const query = req.query.query;
    const searchSql = `
        SELECT *
        FROM cases
        WHERE case_name LIKE ? OR case_citation LIKE ? OR medium_neutral LIKE ? OR case_year LIKE ? OR case_court LIKE ? OR case_topic LIKE ? OR case_ratio LIKE ? OR case_notes LIKE ?`;

    db.query(searchSql, Array(8).fill(`%${query}%`), (err, results) => {
        if (err) {
            console.error('Error searching cases:', err);
            return res.status(500).send('Internal Server Error');
        }
        res.json(results);
    });
});

// API endpoint to retrieve case details
router.get('/review/:id', (req, res) => {
    const caseId = req.params.id;
    const caseSql = `SELECT * FROM cases WHERE case_id = ?`;

    db.query(caseSql, [caseId], (err, result) => {
        if (err) {
            console.error('Error fetching case details:', err);
            return res.status(500).send('Internal Server Error');
        }

        if (result.length === 0) {
            return res.status(404).send('Case not found');
        }

        // Optionally, include more information, such as associated judges
        const judgesSql = `SELECT j.judge_name FROM judges j
                           JOIN case_judges cj ON j.judge_id = cj.judge_id
                           WHERE cj.case_id = ?`;

        db.query(judgesSql, [caseId], (err, judges) => {
            if (err) {
                console.error('Error fetching associated judges:', err);
                return res.status(500).send('Internal Server Error');
            }

            // Combine case details with associated judges before sending the response
            const caseDetails = {
                ...result[0],
                judges: judges.map(j => j.judge_name)
            };

            res.json(caseDetails);
        });
    });
});

module.exports = router;

const logger = require('morgan');
app.use(logger('dev')); // Consider 'combined' for more detailed logs in production

