import dynamic from "next/dynamic";
import data from "../data/mapData.json";
import styles from "./page.module.css";

const LazyMap = dynamic(() => import("../components/MapBox"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const singaporeData = data.filter((d) => d.map.indexOf("Singapore Map") > -1);
const seaData = data.filter((d) => d.map.indexOf("Southeast Asia Map") > -1);

export default async function Home() {
  return (
    <main className={styles.main}>
      <h1>Leaflet demo</h1>
      <LazyMap data={singaporeData} initialZoom={10} title={"Singapore"} />
      <LazyMap data={seaData} initialZoom={5} title={"Southeast Asia"} />
    </main>
  );
}
