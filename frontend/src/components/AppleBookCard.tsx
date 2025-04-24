import { AppleBookType } from "../types/BooksTypes"
import Button from "./Button"

type AppleCardProps = {
    book: AppleBookType;
    onClickDetail: () => void;
}

function AppleBookCard({book, onClickDetail}: AppleCardProps) {
  return (
    <div
      key={book.trackId}
      className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-xl overflow-hidden w-full md:1/2 flex flex-col items-center text-center p-4"
    >
      <img
        src={book.artworkUrl100?.replace("100x100", "300x300")}
        alt={book.trackName}
        className="w-40 h-auto rounded-md mb-4"
      />

      <h1 className="font-semibold text-lg md:text-xl mb-1">
        {book.trackName}
      </h1>

      <p className="text-gray-700 text-sm mb-1">
        {book.artistName}
      </p>

      <p className="text-gray-500 text-sm mb-4">
        {book.releaseDate}
      </p>

      <Button onClickDetail={onClickDetail} typ="primary">Detaily</Button>
    </div>
  )
}

export default AppleBookCard