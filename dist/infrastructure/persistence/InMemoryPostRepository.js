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
exports.InMemoryPostRepository = void 0;
class InMemoryPostRepository {
    constructor() {
        this.posts = [];
    }
    save(post) {
        return __awaiter(this, void 0, void 0, function* () {
            this.posts.push(post);
            return post;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = this.posts.find(p => p.id === id);
            return post || null;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.posts;
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const postIndex = this.posts.findIndex(p => p.id === id);
            if (postIndex === -1) {
                return null;
            }
            this.posts[postIndex] = Object.assign(Object.assign({}, this.posts[postIndex]), data);
            return this.posts[postIndex];
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.posts = this.posts.filter(p => p.id !== id);
        });
    }
}
exports.InMemoryPostRepository = InMemoryPostRepository;
