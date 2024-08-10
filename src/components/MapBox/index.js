"use client";

import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import MapComponent from "@/components/MapComponent";
import DetailsBox from "@/components/DetailsBox";
import SiteList from "@/components/SiteList";

// TODO: make it so you can click on the list and focus the map.

const MapBox = ({ title, data, initialZoom }) => {
  // This is the name of the currently focused site
  const [currentlyOpen, setCurrentlyOpen] = useState(null);

  const setFocus = (name) => {
    setCurrentlyOpen(name);
  };

  return (
    <section className={styles.mapWrapper}>
      <div className={styles.mapDiv}>
        <h2>{title}</h2>
        <MapComponent
          data={data}
          initialZoom={initialZoom}
          setFocus={setFocus}
          currentlyOpen={currentlyOpen}
        />
        <SiteList
          data={data}
          currentlyOpen={currentlyOpen}
          setFocus={setFocus}
        />
        <DetailsBox entry={data.find((d) => d.name === currentlyOpen)} />
      </div>
    </section>
  );
};

export default MapBox;
