import { appleBooksSearch } from "../api/bookSearch"
import { useEffect, useState } from "react"
import { AppleBookType } from "../types/BooksTypes"
import AppleBookCard from "./AppleBookCard";
import AppleBookDetailModal from "./AppleBookDetailModal";

function AppleBooks() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [appleBooks, setAppleBooks] = useState<any[]>([]);
    const [selectedBook, setSelectedBook] = useState<AppleBookType | null>(null);

    const handleOpenModal = (book: AppleBookType) => {
        setSelectedBook(book);
    }

    const handleCloseModal = () => {
        setSelectedBook(null);
    }

    useEffect(() => {
        const fetchBooks = async () => {
            const appleData = await appleBooksSearch("Malý princ", 8);
            if (appleData?.results) {
                setAppleBooks(appleData.results);
            }
        }

        fetchBooks();
    }, [])

  return (
    <div>
        <h1 className="text-2xl md:text-3xl font-bold px-5">Apple Books</h1>
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4">
                {appleBooks.length > 0 ? (
                    appleBooks.map((book) => (
                        <AppleBookCard book={book} onClickDetail={() => handleOpenModal(book)} />
                    ))
                ) : (
                    <h1>Loading...</h1>
                )}
                {
                    selectedBook && (
                        <AppleBookDetailModal book={selectedBook} onClose={handleCloseModal} />
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default AppleBooks