"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaPostRepository = void 0;
class PrismaPostRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    save(post) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdPost = yield this.prisma.post.create({
                data: post,
            });
            return createdPost;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield this.prisma.post.findUnique({
                where: { id },
            });
            return post;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield this.prisma.post.findMany();
            return posts;
        });
    }
    update(id, post) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedPost = yield this.prisma.post.update({
                where: { id },
                data: post,
            });
            return updatedPost;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.prisma.post.delete({
                where: { id },
            });
        });
    }
}
exports.PrismaPostRepository = PrismaPostRepository;
