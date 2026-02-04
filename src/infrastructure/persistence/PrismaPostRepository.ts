import { PrismaClient } from '../../generated/prisma';
import { Post } from '../../domain/entities/Post';
import { PostRepository } from '../../application/repositories/PostRepository';

export class PrismaPostRepository implements PostRepository {
  constructor(private prisma: PrismaClient) {}

  async save(post: Post): Promise<Post> {
    const createdPost = await this.prisma.post.create({
      data: post,
    });
    return createdPost;
  }

  async findById(id: string): Promise<Post | null> {
    const post = await this.prisma.post.findUnique({
      where: { id },
    });
    return post;
  }

  async findAll(): Promise<Post[]> {
    const posts = await this.prisma.post.findMany();
    return posts;
  }

  async update(id: string, post: Partial<Post>): Promise<Post | null> {
    const updatedPost = await this.prisma.post.update({
      where: { id },
      data: post,
    });
    return updatedPost;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.post.delete({
      where: { id },
    });
  }
}
