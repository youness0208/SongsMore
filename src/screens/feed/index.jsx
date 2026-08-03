import React, { useEffect, useState } from "react";
import axios from "axios";
import useFavorites from "../../hooks/useFavorites";

export default function Feed() {
  const [tracks, setTracks] = useState([]);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    axios.get("http://localhost:3001/api/chart")
      .then(res => {
        console.log("RESPUESTA DEL BACKEND:", res.data);
        setTracks(res.data.data || res.data.tracks?.data || []);
      })
      .catch(err => console.error("ERROR EN FEED:", err));
  }, []);

  return (
    <div style={{ color: "white", padding: 20 }}>
      <h2>Top Global</h2>

      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {tracks.map(track => (
          <div key={track.id} style={{ width: 150 }}>
            <img src={track.album.cover_medium} width={150} />
            <p>{track.title}</p>
            <small>{track.artist.name}</small>

            {isFavorite(track.id) ? (
              <button className="heart-btn"
                onClick={() => removeFavorite(track.id)}
                style={{ marginTop: 10 }}
              >
                💔
              </button>
            ) : (
              <button className="heart-btn active"
                onClick={() =>
                  addFavorite({
                    id: track.id,
                    title: track.title,
                    artist: track.artist.name,
                    cover: track.album.cover_medium,
                    preview: track.preview
                  })
                }
                style={{ marginTop: 10 }}
              >
                ❤️
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}