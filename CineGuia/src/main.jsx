import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import Home from "./pages/Home/Home.jsx";
import Movie from "./pages/Movie/Movie.jsx";
import Search from "./pages/Search/Search.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/CineReview" element={<Home />} />
          <Route path="/CineReview/movie/:id" element={<Movie />} />
          <Route path="/CineReview/search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
