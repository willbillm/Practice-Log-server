import express from 'express';
import { getStats, createStats } from '../controllers/Tracker.js';

const guitarRouter = express.Router();

guitarRouter.get('/', getStats);

guitarRouter.post('/', createStats);

export default guitarRouter;