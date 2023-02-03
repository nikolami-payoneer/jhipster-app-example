export interface IPost {
  id: number;
  title?: string | null;
}

export type NewPost = Omit<IPost, 'id'> & { id: null };
