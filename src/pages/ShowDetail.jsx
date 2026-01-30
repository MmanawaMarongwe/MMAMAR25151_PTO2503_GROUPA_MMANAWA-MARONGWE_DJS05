import { Link, useParams } from "react-router-dom";

/**
 * ShowDetail placeholder page.
 * Reuses layout styles from the previous modal implementation.
 * Data fetching and season logic will be added incrementally.
 */
export default function ShowDetail() {
  const { id } = useParams();

  return (
    <main className="show-detail">
      <Link to="/" className="back-link">
        ← Back to browsing
      </Link>

      <h2>Podcast Details</h2>

      <div>
        <div className="podcast-info">
          <div className="image-grid">
            <img
              src="https://via.placeholder.com/300"
              alt="Podcast cover placeholder"
              className="modal-image"
            />
          </div>

          <div className="info-grid">
            <h3>Description</h3>
            <p className="text-muted">
              This is a placeholder for the podcast description.
              <br />
              <strong>Show ID:</strong> {id}
            </p>

            <h3>Genres</h3>
            <div className="genre-tags">
              <span className="tag">Genre</span>
              <span className="tag">Genre</span>
            </div>

            <p className="text-muted">Last updated —</p>
          </div>
        </div>

        <div>
          <h2>Seasons</h2>

          <div className="season">
            <div className="season-row">
              <strong className="season-title">Season 1</strong>
              <span className="text-muted episodes-count">0 episodes</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
