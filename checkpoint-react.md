
⭐ **FS26 Checkpoint REACT** ⭐

✅ Crea una semplice applicazione React che permetta agli utenti di cercare informazioni sui Pokémon utilizzando la PokeAPI (https://pokeapi.co/api/v2/pokemon/{POKEMON_NAME}).

✅ L'applicazione dovrebbe includere un campo input in cui gli utenti possono inserire il nome di un Pokémon. **Utilizza un controlled form**

✅ Quando viene inviato il nome tramite il pulsante di invio, l'applicazione dovrebbe fare una richiesta alla PokeAPI per ottenere i dettagli del Pokémon corrispondente. 

✅ Mostra il nome, l'immagine, il tipo del Pokémon e le sue abilità. 

✅ Se il Pokémon non viene trovato, utilizza il **conditional rendering** per mostrare un messaggio di errore appropriato.

✅ Fai in modo che al caricamento della pagina venga fatta una chiamata di esempio con un Pokémon a tua scelta

⭐ **BONUS:** ⭐

Al click di un bottone "More info" da visualizzare contestualmente ai dati della scheda del
Pokémon vogliamo aggiungere le seguenti informazioni:

- Egg groups
- Colore
- Forma (Shape)

Effettuando una chiamata GET al link
"https://pokeapi.co/api/v2/pokemon-species/{POKEMON_NAME}"