import { googleBooksSearch } from "../api/googleBooks"
import { useEffect, useState } from "react"

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
                <div
                key={book.id}
                className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-xl overflow-hidden w-full md:1/2 flex flex-col items-center text-center p-4"
              >
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail}
                  alt={book.volumeInfo.title}
                  className="w-40 h-auto rounded-md mb-4"
                />
              
                <h1 className="font-semibold text-lg md:text-xl mb-1">
                  {book.volumeInfo.title}
                </h1>
              
                <p className="text-gray-700 text-sm mb-1">
                  {book.volumeInfo.authors?.map((author: string, index: number) => (
                    <span key={index}>
                      {author}
                      {index < book.volumeInfo.authors.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              
                <p className="text-gray-500 text-sm mb-4">
                  {book.volumeInfo.publishedDate}
                </p>
              
                <button className="cursor-pointer text-sm border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors px-3 py-1 rounded">
                  Detail
                </button>
              </div>
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