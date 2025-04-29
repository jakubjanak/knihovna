import { useEffect, useState } from "react"
import { OpenLibraryType } from "../types/BooksTypes"
import OpenLibraryCard from "./OpenLibraryCard"
import { openLibrarySearch } from "../api/bookSearch"
import { getOpenLibraryDetail } from "../api/additionalFuncs"
import OpenLibraryModal from "./OpenLibraryModal"

function OpenLibraryBooks({nazev, pocet}: {nazev: string, pocet: number}) {
    const [books, setBooks] = useState<OpenLibraryType[]>([])
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [selectedBook, setSelectedBook] = useState<any>(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [bookDetail, setBookDetail] = useState<any>(null)

    const handleOpenModal = async (book: OpenLibraryType) => {
        setSelectedBook(book);

        const detail = await getOpenLibraryDetail(book.key);
        setBookDetail(detail);
        console.log(detail)
        
    }

    const handleCloseModal = () => {
        setSelectedBook(null);
        setBookDetail(null);
    }

    useEffect(() => {
        const fetchBooks = async () => {
            const results = await openLibrarySearch(nazev, pocet);
            setBooks(results);
        }

        fetchBooks();
    }, [])
        
  return (
    <div>
    <h1 className="text-2xl md:text-3xl font-bold px-5">OpenLibrary Books</h1>
    <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4">
            {
                books.length > 0 ?(
                books.map((book) => (
                    <OpenLibraryCard key={book.key} book={book} onClickDetail={() => handleOpenModal(book)} />
                ))
            ) : (
                <h1>Loading...</h1>
            )}
            {
                selectedBook && (
                    <OpenLibraryModal book={selectedBook} bookDetail={bookDetail} onClose={handleCloseModal} />
                )
            }
        </div>
    </div>
</div>
  )
}

export default OpenLibraryBooks