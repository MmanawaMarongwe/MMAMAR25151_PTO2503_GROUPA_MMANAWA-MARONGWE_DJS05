import { useParams } from "react-router-dom";
import { fetchSinglePodcast } from "../api/fetchData";
import { useState, useEffect } from "react";
import { dateFormat } from "../utils/dateFormat";
import ShowDetailHeader from "./ShowDetailHeader";
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
  setLoading(true);
  setError("");
  setShow(null);

  fetchSinglePodcast(id, setShow, setError, setLoading);
}, [id]);

  return (
    <main className="show-detail">
     
    {loading && <p className="text-muted">Loading show…</p>}
    {!loading && error && <p className="text-muted">{error}</p>}

    {!loading && !error && show && (
      <>
       <ShowDetailHeader/>
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

           { /* <h3>Genres</h3>
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
            </div>*/}

            <p className="text-muted">Last updated {dateFormat(show?.updated || "—")}</p>
          </div>
        </div>

        <div>
            <h2>Seasons</h2>

            {(show.seasons || []).map((season, i) => {
              const title = season.title || `Season ${i + 1}`;
              const epCount = season.episodes?.length ?? 0;

              return (
                <div className="season" key={season.id || i}>
                  <div className="season-row">
                    <strong className="season-title">{title}</strong>
                    <span className="episodes-count">
                      {epCount} episode{epCount === 1 ? "" : "s"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          </div>)
          </> )}
    </main>
  );
}
