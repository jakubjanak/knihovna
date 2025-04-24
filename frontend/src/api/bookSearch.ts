import axios from "axios"

export const googleBooksSearch = async (nazev: string, pocet: number) => {
    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes`,
            {
                params: {
                    q: nazev,
                    maxResults: pocet,
                    orderBy: "relevance",
                    printType: "books",
                    key: import.meta.env.VITE_GOOGLE_API_KEY,
                },
            },
        );
        return response.data;
    } catch (err) {
        console.error("Chyba při získávání dat z Google API: ", err)
        return null;
    }
}

export const appleBooksSearch = async (nazev: string, pocet: number) => {
    try {
        const response = await axios.get("https://itunes.apple.com/search",
            {
                params: {
                    term: nazev,
                    limit: pocet,
                    media: "ebook",
                    country: "cz",
                }
            }
        )
        console.log(response.data)
        return response.data;
    } catch (err) {
        console.error("Chyba při získávání dat z Apple API: ", err);
        return null;
    }
}