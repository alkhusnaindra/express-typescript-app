import { Post } from '../../domain/entities/Post';
import { PostRepository } from '../repositories/PostRepository';
import { v4 as uuidv4 } from 'uuid';

export class CreatePost {
  constructor(private postRepository: PostRepository) {}

  async execute(title: string, content: string): Promise<Post> {
    const post: Post = {
      id: uuidv4(),
      title,
      content,
      createdAt: new Date(),
    };
    return this.postRepository.save(post);
  }
}
