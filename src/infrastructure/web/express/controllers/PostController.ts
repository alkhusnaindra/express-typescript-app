import { Request, Response } from 'express';
import { CreatePost } from '../../../../application/use-cases/CreatePost';
import { GetPost } from '../../../../application/use-cases/GetPost';
import { GetAllPosts } from '../../../../application/use-cases/GetAllPosts';
import { UpdatePost } from '../../../../application/use-cases/UpdatePost';
import { DeletePost } from '../../../../application/use-cases/DeletePost';
import { PostRepository } from '../../../../application/repositories/PostRepository';

export class PostController {
  private createPost: CreatePost;
  private getPost: GetPost;
  private getAllPosts: GetAllPosts;
  private updatePost: UpdatePost;
  private deletePost: DeletePost;

  constructor(postRepository: PostRepository) {
    this.createPost = new CreatePost(postRepository);
    this.getPost = new GetPost(postRepository);
    this.getAllPosts = new GetAllPosts(postRepository);
    this.updatePost = new UpdatePost(postRepository);
    this.deletePost = new DeletePost(postRepository);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { title, content } = req.body;
    const post = await this.createPost.execute(title, content);
    return res.status(201).json(post);
  }

  async get(req: Request, res: Response): Promise<Response> {
    const id = req.params.id as string;
    const post = await this.getPost.execute(id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    return res.json(post);
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    const posts = await this.getAllPosts.execute();
    return res.json(posts);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const id = req.params.id as string;
    const post = await this.updatePost.execute(id, req.body);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    return res.json(post);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const id = req.params.id as string;
    await this.deletePost.execute(id);
    return res.status(204).send();
  }
}
