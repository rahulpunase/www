const mysql = require('mysql2/promise');
import { config } from './config.db';
export default mysql.createPool(config);
