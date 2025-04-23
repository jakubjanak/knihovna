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
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-center gap-4 items-left p-4">
          {
            googleBooks.length > 0 ? googleBooks.map((book) => (
              <div key={book.id} className="p-2 my-1 w-full md:w-1/6">
                <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book Thumbnail" />
                <h1 className="font-bold text-xl md:text-2xl">{book.volumeInfo.title}</h1>
                <p className="text-sm md:text-base">{
                  book.volumeInfo.authors?.map((author: string, index: number) => (
                    <span key={index}>
                      {author}
                      {index < book.volumeInfo.authors.length - 1 ? ", " : ""}
                    </span>
                  ))
                }</p>
                <p className="text-sm md:text-base mb-2">{book.volumeInfo.publishedDate}</p>
                <button className="cursor-pointer border border-blue-200 text-blue-600 hover:border-transparent hover:bg-blue-600 hover:text-white active:bg-blue-700 py-1 px-2.5 rounded">Detail</button>
              </div>
            ))
            : <h1>Loading...</h1>
          }
        
        </div>
      </div>
    </div>
  )
}

export default GoogleBooks