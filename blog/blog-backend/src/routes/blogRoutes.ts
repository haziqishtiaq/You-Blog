import { Router } from 'express';
import { getBlogs, createBlog } from '../controllers/blogController';
import { getNewestBlogs } from '../controllers/blogController';

const router = Router();

router.get('/', getBlogs);
router.post('/', createBlog);
router.get('/newest', getNewestBlogs)

export default router;