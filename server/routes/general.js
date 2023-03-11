import express from 'express'
import { getMergedPDF } from '../controllers/general.js'
import multer from "multer";

const filesMiddleware = multer({ dest: "data/" });

const router = express.Router();

router.post('/merge-pdf', filesMiddleware.array("files", 15), getMergedPDF);

export default router;