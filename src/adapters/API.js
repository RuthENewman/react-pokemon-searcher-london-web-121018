class API {
  static init() {
    this.baseURL = 'http://localhost:4000';
    this.pokemonsURL = this.baseURL + '/pokemon';
  }

    static getPokemons() {
      return this.getURL(this.pokemonsURL)
    }

    static createPokemon(pokemon) {
      return this.post(this.pokemonsURL, pokemon)
    }

    static getURL (url) {
      return fetch(url)
          .then(response => response.json())
    }

    static post (url, data) {
      return fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      }).then(response => response.json())
    }

  }

API.init()

export default API;
