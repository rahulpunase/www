import express from 'express';
const router = express.Router();

import { getCountryCode } from '../controllers/country.controller';

/**
 * router
 * */

router.get('/getcountrycodes', getCountryCode);

const countryRouter = router;
export default countryRouter;
