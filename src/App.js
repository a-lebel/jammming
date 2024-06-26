import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/PlayList/PlayList';

const App = () => {
  return (
    <div>
      <h1>Ja<span>mmm</span>ing</h1>
      <SearchBar />
      <div>
        <SearchResults />
        <Playlist />
      </div>
    </div>
  );
};


export default App;
