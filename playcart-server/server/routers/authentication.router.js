import express from 'express';
const router = express.Router();

import { createUserAccount } from '../controllers/authentication.controller';

/**
 * router
 * */

router.post('/createuseraccount', createUserAccount);

const authenticationRouter = router;
export default authenticationRouter;
