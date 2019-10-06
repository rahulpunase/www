import pool from '../db/connection.db';
import { _getCountryCode } from '../services/country.service';

/**
 * fetching all the country codes from db
*/
export const getCountryCode = async (req, res, next) => {
    let connection = null;
    try {
        connection = await pool.getConnection();
        const countryCode = await _getCountryCode(connection);
        res.json(countryCode);
    } catch (e) {
        connection.release();
        next(e);
    }
}
