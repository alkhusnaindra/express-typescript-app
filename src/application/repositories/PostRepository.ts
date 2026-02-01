import { Post } from '../../domain/entities/Post';

export interface PostRepository {
  save(post: Post): Promise<Post>;
  findById(id: string): Promise<Post | null>;
  findAll(): Promise<Post[]>;
  update(id: string, post: Partial<Post>): Promise<Post | null>;
  delete(id: string): Promise<void>;
}
