import React from 'react';
import styles from './Track.module.css';

const Track = ({ track }) => {
  return (
    <div className={styles.Track}>
      <div className={styles.TrackInformation}>
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      <button className={styles.TrackAction}>+</button>
    </div>
  );
};

export default Track;