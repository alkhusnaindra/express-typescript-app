import { Post } from '../../domain/entities/Post';
import { PostRepository } from '../repositories/PostRepository';

export class GetAllPosts {
  constructor(private postRepository: PostRepository) {}

  async execute(): Promise<Post[]> {
    return this.postRepository.findAll();
  }
}
