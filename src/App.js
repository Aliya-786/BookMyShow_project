import { Routes, Route } from "react-router-dom";
import axios from "axios";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import HomePage from "./components/Pages/HomePage";
import MoviePage from "./components/Pages/MoviePage";
import PlayPage from "./components/Pages/PlayPage";
import ErrorPage from "./components/Pages/404";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
