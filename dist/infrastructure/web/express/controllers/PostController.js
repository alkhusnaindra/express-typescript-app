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
exports.PostController = void 0;
const CreatePost_1 = require("../../../../application/use-cases/CreatePost");
const GetPost_1 = require("../../../../application/use-cases/GetPost");
const GetAllPosts_1 = require("../../../../application/use-cases/GetAllPosts");
const UpdatePost_1 = require("../../../../application/use-cases/UpdatePost");
const DeletePost_1 = require("../../../../application/use-cases/DeletePost");
class PostController {
    constructor(postRepository) {
        this.createPost = new CreatePost_1.CreatePost(postRepository);
        this.getPost = new GetPost_1.GetPost(postRepository);
        this.getAllPosts = new GetAllPosts_1.GetAllPosts(postRepository);
        this.updatePost = new UpdatePost_1.UpdatePost(postRepository);
        this.deletePost = new DeletePost_1.DeletePost(postRepository);
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, content } = req.body;
            const post = yield this.createPost.execute(title, content);
            return res.status(201).json(post);
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const post = yield this.getPost.execute(id);
            if (!post) {
                return res.status(404).json({ message: 'Post not found' });
            }
            return res.json(post);
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield this.getAllPosts.execute();
            return res.json(posts);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const post = yield this.updatePost.execute(id, req.body);
            if (!post) {
                return res.status(404).json({ message: 'Post not found' });
            }
            return res.json(post);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield this.deletePost.execute(id);
            return res.status(204).send();
        });
    }
}
exports.PostController = PostController;
