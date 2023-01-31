import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <h1>loading...</h1>
        </div>
      ) : (
        <div>
          <h1>ID: {movie.id}</h1>
          <h2>제목: {movie.title_long}</h2>
          <h3>평점: {movie.rating}</h3>
          <p>업로드 날짜: {movie.date_uploaded}</p>
          <p>다운로드 횟수: {movie.download_count}</p>
          <img src={movie.large_cover_image}></img>
        </div>
      )}
    </div>
  );
}

export default Detail;
