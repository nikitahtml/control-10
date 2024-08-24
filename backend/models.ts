export interface News {
    id: number;
    title: string;
    content: string;
}

export interface Comment {
    id: number;
    newsId: number;
    content: string;
}