export type GoogleBookType = {
    id: string;
    volumeInfo: {
        title: string;
        subtitle?: string;
        authors: string[];
        publishedDate?: string;
        imageLinks?: {
            thumbnail?: string;
        }
    }
}