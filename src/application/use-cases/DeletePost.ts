import { PostRepository } from '../repositories/PostRepository';

export class DeletePost {
  constructor(private postRepository: PostRepository) {}

  async execute(id: string): Promise<void> {
    return this.postRepository.delete(id);
  }
}
