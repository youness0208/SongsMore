import React, { useEffect, useState } from "react";
import { deezerApi } from "../../deezer";
import { useLocation } from "react-router-dom";
import "./player.css";

export default function Player() {
  const location = useLocation();
  const playlistId = location.state?.id;
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
  if (!playlistId) return;

  deezerApi
    .get(`/deezer/playlist/${playlistId}`)
    .then((res) => setTracks(res.data.tracks.data));
}, [playlistId]);

  if (!tracks) {
    return <div className="screen-container">Cargando canciones...</div>;
  }

  return (
    <div className="screen-container">
      {tracks.map((t) => (
        <div key={t.id} className="track-card">
          <img src={t.album.cover_small} />
          <div>
            <p>{t.title}</p>
            <audio controls src={t.preview}></audio>
          </div>
        </div>
      ))}
    </div>
  );
}