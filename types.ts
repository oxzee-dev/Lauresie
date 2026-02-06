
export interface BlogPost {
  id: string;
  title: string;
  date: string;
  tags: string[];
  text: string;
  author: string;
  imageUrl?: string;
}

export type NewBlogPost = Omit<BlogPost, 'id' | 'author'>;
