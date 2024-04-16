import db from '../../../db.js';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { caseData, judgeNames } = req.body;
    if (!caseData || !judgeNames || judgeNames.length === 0) {
        return res.status(400).json({ message: "Missing required data" });
    }

    let connection;
    try {
        connection = await db.getConnection();
        await connection.beginTransaction();

        const [caseResult] = await connection.execute(`
            INSERT INTO cases (case_name, case_citation, medium_neutral, case_year, case_court, case_topic, case_ratio, case_notes)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [caseData.name, caseData.citation, caseData.mediumNeutral, caseData.year, caseData.court, caseData.topic, caseData.ratio, caseData.notes]
        );
        const caseId = caseResult.insertId;

        for (const judgeName of judgeNames) {
            let [judgeResult] = await connection.query(
                `SELECT judge_id FROM judges WHERE judge_name = ?`,
                [judgeName]
            );

            let judgeId = judgeResult.length > 0 ? judgeResult[0].judge_id : (await connection.execute(
                `INSERT INTO judges (judge_name) VALUES (?)`, [judgeName]
            ))[0].insertId;

            await connection.execute(
                `INSERT INTO case_judges (case_id, judge_id) VALUES (?, ?)`,
                [caseId, judgeId]
            );
        }

        await connection.commit();
        res.status(201).json({ message: 'Case successfully submitted', caseId });
    } catch (error) {
        if (connection) {
            await connection.rollback();
        }
        console.error('Failed to submit case:', error);
        return res.status(500).json({ message: 'Failed to submit case', error: error.toString() });
    } finally {
        if (connection) {
            await connection.release();
        }
    }
}
