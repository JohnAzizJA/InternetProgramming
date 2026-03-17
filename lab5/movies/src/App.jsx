import { useState } from "react";

function App() {

  const [movies, setMovies] = useState([]);

  function addMovie(movie) {
    setMovies([...movies, movie]);
  }

  function removeMovie(index) {
    const newList = movies.filter((m, i) => i !== index);
    setMovies(newList);
  }

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>My Movies</h1>
      <AddMovieForm addMovie={addMovie} />
      <MovieList movies={movies} removeMovie={removeMovie} />
    </div>
  );
}

function AddMovieForm({ addMovie }) {

  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);

  function handleSubmit() {
    if(title === "") return;

    addMovie({
      title: title,
      review: review,
      rating: rating
    });

    setTitle("");
    setReview("");
    setRating(1);
  }

  return (
    <div style={styles.form}>

      <input
        style={styles.input}
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        style={styles.textarea}
        placeholder="Your Review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      <select
        style={styles.input}
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      >
        <option style={{background: "#16213e"}} value="1">1 Star</option>
        <option style={{background: "#16213e"}} value="2">2 Stars</option>
        <option style={{background: "#16213e"}} value="3">3 Stars</option>
        <option style={{background: "#16213e"}} value="4">4 Stars</option>
        <option style={{background: "#16213e"}} value="5">5 Stars</option>
      </select>

      <button style={styles.button} onClick={handleSubmit}>
        Add Movie
      </button>

    </div>
  );
}

function MovieList({ movies, removeMovie }) {

  return (
    <div>

      {movies.length === 0 && (
        <p style={{opacity:0.5, color:"#f0f0f0", textAlign:"center", marginTop:"20px"}}>No movies yet</p>
      )}

      {movies.map((movie, index) => (
        <MovieItem
          key={index}
          movie={movie}
          removeMovie={removeMovie}
          index={index}
        />
      ))}

    </div>
  );
}

function MovieItem({ movie, removeMovie, index }) {

  const stars = "⭐".repeat(movie.rating);

  return (
    <div style={styles.card}>

      <h3 style={{margin:"0 0 8px", color:"#e2b96f", fontSize:"1.1rem"}}>{movie.title}</h3>

      <p style={{margin:"0 0 8px", opacity:0.85, fontSize:"0.92rem"}}>{movie.review}</p>

      <p style={{margin:"0 0 10px", fontSize:"1rem"}}>{stars}</p>

      <button
        style={styles.remove}
        onClick={() => removeMovie(index)}
      >
        Remove
      </button>

    </div>
  );
}

const styles = {

  page:{
    background:"linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    minHeight:"100vh",
    padding:"40px 20px",
    fontFamily:"'Segoe UI', Arial, sans-serif"
  },

  title:{
    color:"#e2b96f",
    fontSize:"2.2rem",
    textAlign:"center",
    letterSpacing:"2px",
    marginBottom:"30px",
    textShadow:"0 2px 8px rgba(0,0,0,0.4)"
  },

  form:{
    background:"rgba(255,255,255,0.05)",
    backdropFilter:"blur(10px)",
    padding:"28px",
    marginBottom:"36px",
    borderRadius:"16px",
    border:"1px solid rgba(255,255,255,0.1)",
    maxWidth:"420px",
    margin:"0 auto 36px auto",
    boxShadow:"0 8px 32px rgba(0,0,0,0.3)"
  },

  input:{
    display:"block",
    marginBottom:"14px",
    padding:"10px 14px",
    width:"100%",
    boxSizing:"border-box",
    borderRadius:"8px",
    border:"1px solid rgba(255,255,255,0.2)",
    background:"rgba(255,255,255,0.08)",
    color:"#f0f0f0",
    fontSize:"0.95rem",
    outline:"none"
  },

  textarea:{
    display:"block",
    marginBottom:"14px",
    padding:"10px 14px",
    width:"100%",
    boxSizing:"border-box",
    height:"80px",
    borderRadius:"8px",
    border:"1px solid rgba(255,255,255,0.2)",
    background:"rgba(255,255,255,0.08)",
    color:"#f0f0f0",
    fontSize:"0.95rem",
    resize:"vertical",
    outline:"none"
  },

  button:{
    background:"linear-gradient(135deg, #e2b96f, #c8a951)",
    color:"#1a1a2e",
    padding:"10px 22px",
    border:"none",
    borderRadius:"8px",
    cursor:"pointer",
    fontWeight:"bold",
    fontSize:"0.95rem",
    letterSpacing:"0.5px",
    boxShadow:"0 4px 12px rgba(226,185,111,0.3)"
  },

  card:{
    background:"rgba(255,255,255,0.06)",
    backdropFilter:"blur(8px)",
    padding:"20px 24px",
    marginBottom:"16px",
    borderRadius:"14px",
    borderLeft:"4px solid #e2b96f",
    maxWidth:"420px",
    margin:"0 auto 16px auto",
    boxShadow:"0 4px 20px rgba(0,0,0,0.25)",
    color:"#f0f0f0"
  },

  remove:{
    background:"rgba(185,74,72,0.85)",
    color:"white",
    border:"none",
    padding:"7px 14px",
    borderRadius:"7px",
    cursor:"pointer",
    fontSize:"0.85rem",
    marginTop:"8px"
  }

};

export default App;