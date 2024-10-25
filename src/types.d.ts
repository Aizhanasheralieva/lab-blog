export interface IPostForm {
  title: string;
  description: string;
  datetime: string;
}

export interface IPost {
  id: string;
  title: string;
  description: string;
  datetime: string;
}

export interface IPostAPI {
  [id: string]: IPost;
}
