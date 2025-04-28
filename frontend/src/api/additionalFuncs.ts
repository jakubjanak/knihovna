import axios from "axios";

export const getOpenLibraryDetail = async (workId: string) => {
    try {
        const response = await axios.get(`https://corsproxy.io/?https://openlibrary.org${workId}.json`);
        return response.data;
    } catch (err) {
        console.error("Chyba při získávání detailu z Open Library API: ", err);
        return null;
    }
}