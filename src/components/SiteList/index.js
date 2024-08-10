import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Entry = ({ data, focused, setFocus }) => {
  const onToggle = (event) => {
    event.preventDefault();
    setFocus(data.name);
  };

  const isOnMap = !(data.lat && data.long);

  return (
    <li
      className={`${styles.entry} ${isOnMap ? styles.notOnMap : ""} ${
        focused ? styles.focused : ""
      }`}
      onClick={onToggle}
    >
      {data.name}
    </li>
  );
};

const SiteList = ({ data, currentlyOpen, setFocus }) => {
  return (
    <div className={styles.textDiv}>
      <ul>
        {data.map((d, index) => (
          <Entry
            data={d}
            key={`map_${index}`}
            focused={currentlyOpen === d.name}
            setFocus={setFocus}
          />
        ))}
      </ul>
      <hr />
      <p>
        <em>
          <span className={styles.notOnMap}>Red</span> indicates sites not on
          map.
        </em>
      </p>
    </div>
  );
};

export default SiteList;
