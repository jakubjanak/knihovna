import { GoogleBookType } from "../types/BooksTypes";
import Button from "./Button";

type BookCardProps = {
    book: GoogleBookType;
    onClickDetail: () => void;
}

function GoogleBookCard({book, onClickDetail}: BookCardProps) {
    const { id, volumeInfo } = book;


  return (
    <div
      key={id}
      className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-xl overflow-hidden w-full md:1/2 flex flex-col items-center text-center p-4"
    >
      <img
        src={volumeInfo.imageLinks?.thumbnail}
        alt={volumeInfo.title}
        className="w-40 h-auto rounded-md mb-4"
      />

      <h1 className="font-semibold text-lg md:text-xl mb-1">
        {volumeInfo.title}
      </h1>

      <p className="text-gray-700 text-sm mb-1">
        {volumeInfo.authors.map((author: string, index: number) => (
          <span key={index}>
            {author}
            {index < volumeInfo.authors.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>

      <p className="text-gray-500 text-sm mb-4">
        {volumeInfo.publishedDate}
      </p>

      <Button onClickDetail={onClickDetail} typ="primary">Detaily</Button>
    </div>
  );
}

export default GoogleBookCard