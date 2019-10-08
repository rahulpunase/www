import express from 'express';
import cors from 'cors';
import { logger } from './utils/logger.util';
import countryRouter from './routers/country.router';
import authenticationRouter from './routers/authentication.router';

const app = express();

app.listen(3000, function (err) {
    if (err) {
        console.log('Error in listening')
    } else {
        console.log('Listening...');
    }
});

app.use(cors({
    origin: ["http://localhost:4200"]
}));
/* Other middlewares and routes */

app.use("/static", countryRouter);
app.use("/authentication", authenticationRouter);
app.use((err, req, res, next) => {
    logger("SOME ERROR OCCURED");
    logger(err.stack.split('\n'));
    res.status(500).json({
        stack: err.stack.split('\n'),
        message: err.message
    });
});
