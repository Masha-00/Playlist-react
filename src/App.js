import React, {useState, useEffect, useMemo, useContext} from 'react';
import SongList from './components/SongsList';
import AddSong from './components/AddSong';
import Counter from './components/Counter'
import Button from './UI/button/button';
import SongModal from './UI/modal/SongModal';
import { initialSongs } from './songs';
import '../src/App.css';

export const SongContext = React.createContext();

function App() {
  const [songs, setSongs] = useState(initialSongs);
  const [modal, setModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const generateId = () => {
    if(!songs.length) {
      return 1;
    }
    return songs[songs.length - 1].id + 1
  };

  const addSong = (song) => {
    setSongs([...songs, song]);
    setModal(false);
  }

  const deleteSong = (id) => {
    setSongs(songs.filter(song => song.id !== id));
  }

  const setLiked = (songId) => {
    setSongs(songs.map(song => {
      if(songId === song.id){
        return { ...song, isLiked: !song.isLiked };
      }
      return song;
    }));
  }

  return (
    <div className="App">
      <Button customClassName='OpenModal' onClick={() => setModal(true)}>ADD SONG</Button>
			<SongModal visible={modal} setVisible={setModal}>
      <AddSong addSong={addSong} generateId={generateId} songs={songs}/>
			</SongModal>
      <SongContext.Provider value={{ deleteSong, setLiked }}>
        <SongList songs={songs}/>
      </SongContext.Provider>
      <Counter songs={songs}/>
    </div>
  );
}

export default App;
