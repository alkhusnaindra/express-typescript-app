import { Router } from 'express';
import { PostController } from '../controllers/PostController';
import { InMemoryPostRepository } from '../../../persistence/InMemoryPostRepository';

const postRepository = new InMemoryPostRepository();
const postController = new PostController(postRepository);

const router = Router();

router.post('/posts', (req, res) => postController.create(req, res));
router.get('/posts/:id', (req, res) => postController.get(req, res));
router.get('/posts', (req, res) => postController.getAll(req, res));
router.put('/posts/:id', (req, res) => postController.update(req, res));
router.delete('/posts/:id', (req, res) => postController.delete(req, res));

export default router;
