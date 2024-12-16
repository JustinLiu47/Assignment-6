function Genres(props) {
  return (
    <div className="genres-container">
      <h2 className="section-title">Browse by Genre</h2>
      <ul className="genres-list">
        {props.genreList.map((genre) => (
          <li
            key={genre.id}
            onClick={() => handleGenreClick(genre.id)}
            className="genre-item"
          >
            {genre.genre}
          </li>
        ))}
      </ul>
    </div>
  )
}

  export default Genres;