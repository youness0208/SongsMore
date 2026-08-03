import React, { useEffect, useState } from "react";
import { deezerApi } from "../../deezer";
import "./library.css";
import { useNavigate } from "react-router-dom";

export default function Library() {
  const [playlists, setPlaylists] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
  deezerApi
    .get("/deezer/playlists")
    .then((res) => setPlaylists(res.data.data))
    .catch(() => setPlaylists([]));
}, []);

  if (!playlists) {
    return <div className="screen-container">Cargando playlists...</div>;
  }

  return (
    <div className="screen-container" onClick={() => {
        localStorage.setItem("current_playlist", p.id);
        navigate("/player", { state: { id: p.id } });
      }}>
      <div className="library-body">
        {playlists.map((p) => (
          <div
            className="playlist-card"
            key={p.id}
            onClick={() => navigate("/player", { state: { id: p.id } })}
          >
            <img src={p.picture_medium} className="playlist-image" />
            <p className="playlist-title">{p.title}</p>
            <p className="playlist-subtitle">{p.nb_tracks} canciones</p>
          </div>
        ))}
      </div>
    </div>
  );
}

