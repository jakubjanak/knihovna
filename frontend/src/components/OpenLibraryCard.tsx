import { OpenLibraryType } from "../types/BooksTypes"
import Button from "./Button"

type OpenLibraryCardProps = {
    book: OpenLibraryType;
    onClickDetail: () => void;
}

function OpenLibraryCard({book, onClickDetail}: OpenLibraryCardProps) {

  return (
    <div
    key={book.key}
    className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-xl overflow-hidden w-full md:1/2 flex flex-col items-center text-center p-4"
  >
    <img
      src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
      alt={book.title}
      className="w-40 h-auto rounded-md mb-4"
    />

    <h1 className="font-semibold text-lg md:text-xl mb-1">
      {book.title}
    </h1>

    {
        book.author_name && (
            book.author_name.map((author, indx) => (
                <p className="text-gray-700 text-sm mb-1" key={indx}>
                    {author}
                </p>
            ))
        )
    }

    <p className="text-gray-500 text-sm">
      {book.first_publish_year}
    </p>

    <Button onClickDetail={onClickDetail} typ="primary">Detaily</Button>
  </div>
  )
}

export default OpenLibraryCard