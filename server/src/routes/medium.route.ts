import { Router } from 'express';
import { fetchMediumArticles } from '../controllers/medium.controller';

const router = Router();

router.get('/:username', fetchMediumArticles);

export default router;
