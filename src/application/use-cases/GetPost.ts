import { Post } from '../../domain/entities/Post';
import { PostRepository } from '../repositories/PostRepository';

export class GetPost {
  constructor(private postRepository: PostRepository) {}

  async execute(id: string): Promise<Post | null> {
    return this.postRepository.findById(id);
  }
}
