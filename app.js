function fetchPokemonJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    const pokemonId = 1;
    const url = `https://api.chucknorris.io/jokes/random`;
    axios.get(url)
      .then(function(response) {
        return response.data; // SUBTLE difference with Fetch: response.data instead of response.json()
      })
      .then(function(pokemon) {
        console.log('data decoded from JSON:', pokemon);
  
        // Build a block of HTML
        const pokemonHtml = `
          <p><strong>${pokemon.name}</strong></p>
          <img src="${pokemon.sprites.front_shiny}" />
        `;
        document.querySelector('#pokemon').innerHTML = pokemonHtml;
      });
  }
  
  fetchPokemonJSON();