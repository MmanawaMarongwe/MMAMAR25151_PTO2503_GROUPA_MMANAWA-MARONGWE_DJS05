/**
 * Render season list (summary rows for now).
 *
 * @param {{ seasons: any[] }} props
 * @returns {JSX.Element}
 */
export default function SeasonList({ seasons = [] }) {
  const safeSeasons = Array.isArray(seasons) ? seasons : [];

  return (
    <div>
      <h2>Seasons</h2>

      {safeSeasons.length ? (
        safeSeasons.map((season, i) => {
          const title = season.title || `Season ${i + 1}`;
          const epCount = season.episodes?.length ?? 0;

          return (
            <div className="season" key={season.id || i}>
              <div className="season-row">
                <strong className="season-title">{title}</strong>
                <span className="text-muted episodes-count">
                  {epCount} episode{epCount === 1 ? "" : "s"}
                </span>
              </div>
            </div>
          );
        })
      ) : (
        <div className="season">
          <div className="season-row">
            <strong className="season-title">No seasons found</strong>
            <span className="text-muted episodes-count">0 episodes</span>
          </div>
        </div>
      )}
    </div>
  );
}