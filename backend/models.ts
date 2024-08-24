export interface News {
    id: string;
    title: string;
    content: string;
    image?: string;
    publishedAt: string;
}


export interface Comment {
    id: string;
    newsId: string;
    author: string;
    content: string;
}
