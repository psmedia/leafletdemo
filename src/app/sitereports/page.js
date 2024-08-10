import data from "@/data/mapData.json";
import dynamic from "next/dynamic";
import styles from "./../page.module.css";

const LazyMap = dynamic(() => import("@/components/MapBox"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const singaporeData = data
  .filter((d) => d.map.indexOf("Singapore Map") > -1)
  .filter((d) => d.siteReportsSlug);
const seaData = data
  .filter((d) => d.map.indexOf("Southeast Asia Map") > -1)
  .filter((d) => d.siteReportsSlug);

const SiteReportsPage = async () => {
  return (
    <main className={styles.main}>
      <LazyMap data={singaporeData} initialZoom={10} title={"Singapore"} />
      <LazyMap data={seaData} initialZoom={5} title={"Southeast Asia"} />
    </main>
  );
};

export default SiteReportsPage;
