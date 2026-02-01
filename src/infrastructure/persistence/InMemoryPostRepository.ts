import { Post } from '../../domain/entities/Post';
import { PostRepository } from '../../application/repositories/PostRepository';

export class InMemoryPostRepository implements PostRepository {
  private posts: Post[] = [];

  async save(post: Post): Promise<Post> {
    this.posts.push(post);
    return post;
  }

  async findById(id: string): Promise<Post | null> {
    const post = this.posts.find(p => p.id === id);
    return post || null;
  }

  async findAll(): Promise<Post[]> {
    return this.posts;
  }

  async update(id: string, data: Partial<Post>): Promise<Post | null> {
    const postIndex = this.posts.findIndex(p => p.id === id);
    if (postIndex === -1) {
      return null;
    }
    this.posts[postIndex] = { ...this.posts[postIndex], ...data };
    return this.posts[postIndex];
  }

  async delete(id: string): Promise<void> {
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
