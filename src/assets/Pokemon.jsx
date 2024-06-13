import { useState } from "react";

export default function Pokemon() {
  const [pokemons, setPokemons] = useState(null);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const [input, setInput] = useState('');

  function fetchPokemon(name) {
    setLoading(true)
    setError(null)
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("An error occurred during fetching data");
        }
        return response.json();
      })
      .then((data) => {
        setPokemons(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim() !== '') {
      fetchPokemon(input.trim().toLowerCase());
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Scrivi un Pokèmon qui..."
        />
        <button type="submit">Submit</button>
      </form>

      {loading && <div>Loading...</div>}
      {error && <div>An error occurred: {error.message}</div>}

      {pokemons && !loading && !error && (
        <div>
          <h1>Pokemon name: {pokemons.name}</h1>
          <img src={pokemons.sprites.front_default} alt={pokemons.name} />
          <p>Abilities: {pokemons.abilities.map((ability) => ability.ability.name).join(', ')}</p>
          <p>Types: {pokemons.types.map((type) => type.type.name).join(', ')}</p>
        </div>
      )}
    </div>
  );
}