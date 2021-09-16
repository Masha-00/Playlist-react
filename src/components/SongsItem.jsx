import { useContext } from 'react';
import { SongContext } from '../App';
import like from '../like.svg';
import Button from '../UI/button/button';
import '../App.css';
import classes from '../components/SongsItem.module.css';

function SongsItem({ song }) {
    const { deleteSong, setLiked } = useContext(SongContext);
    return(
        <div className={classes.Songs__item}>
            <div className={classes.Name}>
                <div className={classes.Song_info}>
                    <p><span>{song.id}</span></p>
                    <p>{song.name}</p>
                   
                </div>
            </div>
            <div className={classes.Info}>
                <div className={classes.Song_info}>
                    <p><span>Author:</span> {song.author}</p>
                    <p><span>Album:</span> {song.albumName}</p>
                </div>
            </div>
            <div className={classes.Date}>
                <p><span>Date of release:</span> {song.releaseDate}</p>
            </div>
            <div className={classes.BtnDel}>
            <img className={classes.LikeNoActive} src={like} alt="" />
            <div className="song_item">
            {
                song.isLiked
                    ? <img src={like} alt="like" width="40"/>
                    : null
            }
            </div>
            <Button customClassName='setLike' onClick={() => setLiked(song.id)}>
                { !song.isLiked ? 'Like' : 'Dislike'}
            </Button>
            <Button customClassName='DeleteSong' onClick={() => deleteSong(song.id)}>&times;</Button>
            </div>
        </div>
    );
}

export default SongsItem