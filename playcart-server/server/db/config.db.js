export const config = {
    host:               'localhost',
    user:               'root',
    port:               3306,
    database:           'playcart',
    connectionLimit:    10,
    password:           '123456',
    queueLimit :        0, 
};
// exports.pool = mysqlCon.createPool({
//     host: host,
//     user: user,
//     port: 3306,
//     password: pass,
//     database: db,
//     queueLimit : 0, // unlimited queueing
//     connectionLimit : 0 // unlimited connections 
// });