export type GoogleBookType = {
    id: string;
    volumeInfo: {
        title: string;
        subtitle?: string;
        authors: string[];
        description?: string;
        pageCount?: number;
        publisher?: string;
        publishedDate?: string;
        imageLinks?: {
            thumbnail?: string;
        }
    };
    saleInfo: {
        buyLink?: string;
        listPrice?: {
            amount?: number;
            currencyCode?: string;
        };
        retailPrice?: {
            amount?: number;
            currencyCode?: string;
        };
        saleability?: string;
    }
}