import styles from "./styles.module.css";
import { merriweather } from "../../app/fonts";

const DetailsBox = ({ entry }) => {
  const isOnMap = entry && !(entry.lat && entry.long);
  const siteReportsUrl =
    entry && entry.siteReportsSlug
      ? `https://epress.nus.edu.sg/sitereports/${entry.siteReportsSlug}`
      : null;

  return entry ? (
    <div className={styles.entry}>
      <h3 className={isOnMap ? styles.notOnMap : ""}>{entry.name}</h3>
      {isOnMap && (
        <p>
          <em>Not shown on map</em>
        </p>
      )}
      {siteReportsUrl ? (
        <p>
          <a href={siteReportsUrl}>{siteReportsUrl}</a>
        </p>
      ) : (
        "Not in Site Reports"
      )}
      <p>
        <em>{entry.type}</em>
      </p>
      {entry.locationNotes !== "" && (
        <p>
          <strong>Location notes:</strong> {entry.locationNotes}
        </p>
      )}
      {entry.elevation !== "" && (
        <p>
          <strong>Elevation:</strong> {entry.elevation}m
        </p>
      )}
      {entry.lastExcavationEnded && (
        <p>
          <strong>Last excavation ended:</strong> {entry.lastExcavationEnded}
        </p>
      )}
      {entry.approximateStartDate && (
        <p>
          <strong>Approximate start date:</strong> {entry.approximateStartDate}
        </p>
      )}
      {entry.approximateEndDate && (
        <p>
          <strong>Approximate end date:</strong> {entry.approximateEndDate}
        </p>
      )}
      {entry.notes && (
        <p className={merriweather.className}>
          <strong>Notes:</strong> {entry.notes}
        </p>
      )}
      {entry.citations && (
        <p>
          <strong>Citations:</strong> {entry.citations}
        </p>
      )}
    </div>
  ) : (
    <div className={styles.entry}>
      <h3>No entry selected</h3>
      <p>Click on a marker or an entry to see details.</p>
    </div>
  );
};

export default DetailsBox;
