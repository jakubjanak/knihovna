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

export type AppleBookType = {
        trackId: number;
        trackName: string;
        artistId: number;
        artistName: string;
        releaseDate: string;
        price: number;
        currency: string;
        description: string;
        trackViewUrl: string;
        artworkUrl100: string;
        genres: string[];
}