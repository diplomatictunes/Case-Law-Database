import db from '../../../db'; // Adjust the path to your db module

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { query } = req.query;
    if (!query) {
        return res.status(400).json({ message: 'Query parameter is required' });
    }

    const searchSql = `
        SELECT *
        FROM cases
        WHERE case_name LIKE ? OR case_citation LIKE ? OR medium_neutral LIKE ? OR case_year LIKE ? OR case_court LIKE ? OR case_topic LIKE ? OR case_ratio LIKE ? OR case_notes LIKE ?`;

    try {
        const placeholders = Array(8).fill(`%${query}%`);
        const [results] = await db.query(searchSql, placeholders);
        res.status(200).json(results);
    } catch (err) {
        console.error('Error searching cases:', err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
}
 