import { useState, useEffect } from "react";
import { fetchPodcasts } from "./api/fetchPodcasts";
import PodcastGrid from "./components/PodcastGrid";
import { PodcastProvider } from "./utils/PodcastContext";
import Header from "./components/Header";
import Filters from "./components/Filters";
import ErrorBoundary from "./components/ErrorBoundary";
import Pagination from "./components/Pagination";
import "./App.css";

export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPodcasts() {
      try {
        setLoading(true);
        setError(null);

        const podcastsArray = await fetchPodcasts(
          setPodcasts,
          setError,
          setLoading
        );
        if (Array.isArray(podcastsArray)) setPodcasts(podcastsArray);
      } catch (err) {
        console.error(err);
        setError("Failed to load podcasts. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    loadPodcasts();
  }, []);

  return (
    <>
      <Header />

      <ErrorBoundary>
        {error && (
          <p className="error">
            Error occurred while fetching podcasts: {error}
          </p>
        )}

        {!error && loading && <p>Loading Podcasts</p>}

        {!error && !loading && (
          <PodcastProvider initialPodcasts={podcasts}>
            <Filters />
            <main>
              <PodcastGrid />
              <Pagination />
            </main>
          </PodcastProvider>
        )}
      </ErrorBoundary>
    </>
  );
}
