import React from 'react';
import Tracklist from '../TrackList/TrackList';
import styles from './SearchResults.module.css';

const SearchResults = () => {
  const mockTracks = [
    { name: "Track1", artist: "Artist1", album: "Album1", id: 1 },
    { name: "Track2", artist: "Artist2", album: "Album2", id: 2 }
  ];

  return (
    <div className={styles.SearchResults}>
      <h2>Results</h2>
      <Tracklist tracks={mockTracks} />
    </div>
  );
};

export default SearchResults;