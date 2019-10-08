import pool from '../db/connection.db';
import { PARTY_TYPE_ID } from '../consts/foreign.consts';
import { INSERT_INTO_PARTY, INSERT_INTO_USER_LOGIN } from '../consts/query.consts';
import uniqid from 'uniqid';

export const createUserAccount = async (req, res, next) => {
    let connection = null;
    const body = req.body;
    // start with the empty check ---- >
    try {
        connection = await pool.getConnection();
        await connection.query("START TRANSACTION");
        const sql  = await connection.format(INSERT_INTO_PARTY, 
            [PARTY_TYPE_ID.PERSON, '', '']);
        const [fields] = await connection.query(sql);
        const insertId = fields.insertId;
        // INSERT_INTO_USER_LOGIN
        await connection.query(INSERT_INTO_USER_LOGIN, [insertId]);
        await connection.query("COMMIT");
        res.json(fields);
    } catch (e) {
        await connection.query("ROLLBACK");
        connection.release();
        next(e);
    }
};