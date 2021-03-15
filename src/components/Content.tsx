import { MovieCard } from '../components/MovieCard';

import '../styles/content.scss';

interface Movies {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  movies: Movies[];
  genreTitle: string;
}

export function Content({ movies, genreTitle }: ContentProps) {
  return (
    <div className="container">
    <header>
      <span className="category">Categoria:<span> {genreTitle}</span></span>
    </header>

    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key={movie.Title} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>
  );
}