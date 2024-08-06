import data from "@/data/mapData.json";
import dynamic from "next/dynamic";
import styles from "./page.module.css";

const LazyMap = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Entry = ({ data }) => {
  return (
    <details className={styles.entry}>
      <summary>
        <strong>{data.name}</strong>
      </summary>
      <p>
        <em>{data.type}</em>
      </p>
      {data.locationNotes !== "" && (
        <p>
          <strong>Location notes:</strong> {data.locationNotes}
        </p>
      )}
      {data.elevation !== "" && (
        <p>
          <strong>Elevation:</strong> {data.elevation}m
        </p>
      )}
      {data.lastExcavationEnded && (
        <p>
          <strong>Last excavation ended:</strong> {data.lastExcavationEnded}
        </p>
      )}
      {data.approximateStartDate && (
        <p>
          <strong>Approximate start date:</strong> {data.approximateStartDate}
        </p>
      )}
      {data.approximateEndDate && (
        <p>
          <strong>Approximate end date:</strong> {data.approximateEndDate}
        </p>
      )}
      {data.notes && (
        <p>
          <strong>Notes:</strong> {data.notes}
        </p>
      )}
      {data.citations && (
        <p>
          <strong>Citations:</strong> {data.citations}
        </p>
      )}
    </details>
  );
};

const singaporeData = data.filter((d) => d.map === "Singapore Map");
const seaData = data.filter((d) => d.map === "Southeast Asia Map");

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Leaflet demo</h1>
      <section className={styles.mapDiv}>
        <h2>Singapore:</h2>
        <div>
          <LazyMap data={singaporeData} initialZoom={13} />
          <div className={styles.textDiv}>
            {singaporeData.map((d, index) => (
              <Entry data={d} key={`singapore_${index}`} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.mapDiv}>
        <h2>Southeast Asia:</h2>
        <div>
          <LazyMap data={seaData} initialZoom={5} />
          <div className={styles.textDiv}>
            <ul>
              {seaData.map((d, index) => (
                <Entry data={d} key={`sea_${index}`} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
