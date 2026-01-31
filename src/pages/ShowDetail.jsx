import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { dateFormat } from "../utils/dateFormat";
import "./showDetail.css";
/**
 * ShowDetail placeholder page.
 * Reuses layout styles from the previous modal implementation.
 * Data fetching and season logic will be added incrementally.
 */
export default function ShowDetail() {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function fetchShow() {
      setLoading(true);
      setError("");
      setShow(null);

      try {
        const res = await fetch(`https://podcast-api.netlify.app/id/${id}`);
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        const data = await res.json();
        if (!ignore) setShow(data);
      } catch (err) {
        if (!ignore) setError(err?.message || "Failed to load show details.");
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    fetchShow();
    return () => {
      ignore = true;
    };
  }, [id]);

  return (
    <main className="show-detail">
      <Link to="/" className="back-link">
        ← Back to browsing
      </Link> 

      
      <div className="show-detail-cover">
        <div className="podcast-info">
          <div className="image-grid">
            <img
              src={show?.image || "https://via.placeholder.com/300"}
              alt={
                show?.title
                  ? `${show.title} cover`
                  : "Podcast cover placeholder"
              }
              className="podcast-cover"
            />
          </div>

          <div className="info-grid">
            <h2>
        {loading && "Loading show…"}
        {!loading && error && "Error loading show"}
        {!loading && !error && show && show.title}
      </h2>
            <h3>Description</h3>
            <p className="text-muted">
              {show?.description || "Podcast description will appear here."}
              <br />
              <strong>Show ID:</strong> {id}
            </p>

            <h3>Genres</h3>
            <div className="genre-tags">
              {show?.genres?.length ? (
                show.genres.map((genreId) => (
                  <span className="tag" key={genreId}>
                    {genreId}
                  </span>
                ))
              ) : (
                <>
                  <span className="tag">Genre</span>
                  <span className="tag">Genre</span>
                </>
              )}
            </div>

            <p className="text-muted">Last updated {dateFormat(show?.updated || "—")}</p>
          </div>
        </div>

        <div>
          <h2>Seasons</h2>

          <div className="season">
            <div className="season-row">
              <strong className="season-title">Season 1</strong>
              <span className="episodes-count">0 episodes</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
