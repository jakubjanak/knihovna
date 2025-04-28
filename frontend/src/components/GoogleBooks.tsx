import { googleBooksSearch } from "../api/bookSearch"
import { useEffect, useState } from "react"
import GoogleBookCard from "./GoogleBookCard";
import { GoogleBookType } from "../types/BooksTypes";
import GoogleBookDetailModal from "./GoogleBookDetailModal";

function GoogleBooks({nazev, pocet}: { nazev: string, pocet: number }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any  
    const [googleBooks, setGoogleBooks] = useState<any[]>([]);
    const [selectedBook, setSelectedBook] = useState<GoogleBookType | null>(null);

    const handleOpenModal = (book: GoogleBookType) => {
        setSelectedBook(book);
    }

    const handleCloseModal = () => {
        setSelectedBook(null);
    }

    useEffect(() => {
        const fetchBooks = async () => {
          const googleData = await googleBooksSearch(nazev, pocet);
          if (googleData?.items) {
            setGoogleBooks(googleData.items);
          }
        }
    
        fetchBooks();
      }, [])
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold px-5">Google Books</h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4">
          {googleBooks.length > 0 ? (
            googleBooks.map((book) => (
            <GoogleBookCard book={book} key={book.id} onClickDetail={() => handleOpenModal(book)} />
            ))
          ) : (
            <h1>Loading...</h1>
          )}
          {
            selectedBook && (
                <GoogleBookDetailModal book={selectedBook} onClose={handleCloseModal} />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default GoogleBooks