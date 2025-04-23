import { googleBooksSearch } from "../api/googleBooks"
import { useEffect, useState } from "react"
import BookCard from "./BookCard";

function GoogleBooks() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any  
    const [googleBooks, setGoogleBooks] = useState<any[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
          const googleData = await googleBooksSearch("Typescript", 10);
          if (googleData?.items) {
            setGoogleBooks(googleData.items);
          }
        }
    
        fetchBooks();
      }, [])
  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold px-5">Google Books</h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4">
          {googleBooks.length > 0 ? (
            googleBooks.map((book) => (
            <BookCard book={book} />
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default GoogleBooks