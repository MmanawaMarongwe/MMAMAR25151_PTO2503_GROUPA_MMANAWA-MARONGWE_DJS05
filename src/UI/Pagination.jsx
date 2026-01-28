import { useContext } from "react";
import { PodcastContext } from "../utils/PodcastContext";

export default function Pagination() {
  const { page, setPage, totalPages } = useContext(PodcastContext);

  if (totalPages <= 1) return null;

  const pageNumbers = Array.from(
    { length: totalPages },
    (unused, index) => index + 1
  );

  return (
    <nav className="pagination" aria-label="Podcast pages">
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </button>

      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => setPage(pageNumber)}
          disabled={pageNumber === page}
          aria-current={pageNumber === page ? "page" : undefined}
        >
          {pageNumber}
        </button>
      ))}

      <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
        Next
      </button>
    </nav>
  );
}
