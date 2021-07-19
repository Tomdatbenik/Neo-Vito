import { Post } from "./post";

export class InstagramUser {
  constructor(id: number, token: string, posts?: Array<Post>) {
    this.id = id;
    this.token = token;
    this.posts = posts ? posts : [];
  }

  id: number;
  token: string;
  posts: Array<Post> = [];
}
