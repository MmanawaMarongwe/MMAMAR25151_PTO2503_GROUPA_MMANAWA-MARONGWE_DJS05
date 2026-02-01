import { useParams } from "react-router-dom";
import { fetchSinglePodcast } from "../api/fetchData";
import { fetchGenreTitles } from "../api/fetchGenres";
import { useState, useEffect } from "react";
import {ShowCover, ShowDetailHeader, ShowInfo, SeasonList, GenreTags} from "./index"
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
  const [genreTitles, setGenreTitles] = useState([]);



useEffect(() => {
  setLoading(true);
  setError("");
  setShow(null);

  fetchSinglePodcast(id, setShow, setError, setLoading);
}, [id]);

useEffect(() => {
  if (!show?.genres || show.genres.length === 0) {
    setGenreTitles([]);
    return;
  }

  // If genres are already strings, DO NOT FETCH
  if (typeof show.genres[0] === "string") {
    setGenreTitles(show.genres);
    return;
  }

  //  Only fetch if they are numeric IDs
  fetchGenreTitles(show.genres)
    .then(setGenreTitles)
    .catch((e) => {
      console.error("Failed to load genre titles:", e);
      setGenreTitles([]);
    });
}, [show?.genres]);

  return (
    <main className="show-detail">
     
    {loading && <p className="text-muted">Loading show…</p>}
    {!loading && error && <p className="text-muted">{error}</p>}

    {!loading && !error && show && (
      <>
       <ShowDetailHeader/>
      <div className="show-detail-cover">
        <div className="podcast-info">
          <ShowCover image={show?.image} title={show?.title} />

          <div className="info-grid">
            <ShowInfo title={show?.title} 
            description={show?.description} 
            updated={show?.updated} 
            id={id} 
            loading={loading} 
            error={error}/>

            <h3>Genres</h3>
            <GenreTags tags={genreTitles} />
           


          </div>
        </div>

        <div>
            <SeasonList/>
          </div>
          </div>
          </> )}
    </main>
  );
}
