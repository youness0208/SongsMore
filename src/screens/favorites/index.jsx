import useFavorites from "../../hooks/useFavorites";

export default function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div style={{ color: "white", padding: 20 }}>
      <h2>Mis Favoritos</h2>

      {favorites.length === 0 && <p>No tienes favoritos aún.</p>}

      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {favorites.map(track => (
          <div key={track.id}>
            <img src={track.cover} width={150} />
            <p>{track.title}</p>
            <small>{track.artist}</small>

            <button onClick={() => removeFavorite(track.id)}>
              💔
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
