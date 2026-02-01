import { Post } from '../../domain/entities/Post';
import { PostRepository } from '../repositories/PostRepository';

export class UpdatePost {
  constructor(private postRepository: PostRepository) {}

  async execute(id: string, data: Partial<Post>): Promise<Post | null> {
    return this.postRepository.update(id, data);
  }
}
