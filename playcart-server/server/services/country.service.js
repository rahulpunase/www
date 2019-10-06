import { SELECT_COUNTRY_CODE } from '../consts/query.consts';
/**
 * fetches country code 
*/
export const _getCountryCode = async (connection) => {
    try {
        const [rows, fields] = await connection.execute(SELECT_COUNTRY_CODE);
        return rows;
    } catch(e) {
        throw new error(e);
    }
}
