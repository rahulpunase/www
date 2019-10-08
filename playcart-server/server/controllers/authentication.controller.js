import pool from '../db/connection.db';
import { PARTY_TYPE_ID } from '../consts/foreign.consts';
import { INSERT_INTO_PARTY } from '../consts/query.consts';
import uniqid from 'uniqid';

export const createUserAccount = async (req, res, next) => {
    let connection = null;
    try {
        connection = await pool.getConnection();
        await connection.query("START TRANSACTION");
        const sql  = await connection.format(INSERT_INTO_PARTY, 
            [PARTY_TYPE_ID.PERSON, '', '']);
        const [fields] = await connection.query(sql);
        await connection.query("COMMIT");
        res.json(fields);
    } catch (e) {
        await connection.query("ROLLBACK");
        connection.release();
        next(e);
    }
};