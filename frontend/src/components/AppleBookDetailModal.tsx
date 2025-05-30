import { AppleBookType } from "../types/BooksTypes"
import Button from "./Button"

type AppleBookDetailModalProps = {
  book: AppleBookType;
  onClose: () => void;
}

function AppleBookDetailModal({book, onClose}: AppleBookDetailModalProps) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center content-start overflow-y-auto bg-black/50 px-4 py-10">
    <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
        onClick={onClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>

      <img
        src={book.artworkUrl100?.replace("100x100", "300x300")}
        alt={book.trackName}
        className="mx-auto w-40 h-auto mb-4 rounded"
      />

      <h1 className="text-xl font-bold text-center mb-2">
        {book.trackName}
      </h1>

      {/* {volumeInfo.subtitle && (
        <h2 className="text-md text-center italic text-gray-700 mb-2">
          {volumeInfo.subtitle}
        </h2>
      )} */}

      <p className="text-sm text-gray-700 text-center mb-1">
        {book.artistName}
      </p>

      <p className="text-sm text-gray-500 text-center mb-3">
        Vydáno: {book.releaseDate}
      </p>

      <p className="text-sm text-gray-800">
        {book.description
          ? book.description
          : "Popis není dostupný."}
      </p>
      <p className="text-base text-center text-gray-800 mt-2">
        {book.price
          ? book.price + " Kč"
          : "Cena není dostupná"}
      </p>
      <div className="flex justify-center items-center mt-1.5">
        <Button typ="primary">
          <a href={book.trackViewUrl} target="_blank">
            Koupit
          </a>
        </Button>
      </div>
    </div>
  </div>
  )
}

export default AppleBookDetailModal