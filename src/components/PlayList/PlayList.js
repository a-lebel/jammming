import React from 'react';
import Tracklist from '../TrackList/TrackList';
import styles from './PlayList.module.css';

const Playlist = () => {
  const mockTracks = [
    { name: "Track3", artist: "Artist3", album: "Album3", id: 3 },
    { name: "Track4", artist: "Artist4", album: "Album4", id: 4 }
  ];

  return (
    <div className={styles.Playlist}>
      <input value="New Playlist" />
      <Tracklist tracks={mockTracks} />
      <button className={styles.SaveButton}>SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;