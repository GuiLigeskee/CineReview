import React from "react";
import "./NavBar.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/CineReview/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h1>
        <Link to="/CineReview">
          <BiCameraMovie /> Cine Review
        </Link>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar filmes"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default NavBar;
