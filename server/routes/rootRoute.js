import express from 'express'
import getRootPage from '../controllers/getRootPage.js'

const router = express.Router();

router.get('/', getRootPage);

export default router;