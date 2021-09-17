import SongInput from '../UI/input/input';

function Search ({ searchQuery, setSearchQuery }) {
    return(
        <SongInput value={searchQuery}
                    plaseholder="Search song..."
                    onChange={(event) => setSearchQuery(event.target.value)} />
    );
}

export default Search;