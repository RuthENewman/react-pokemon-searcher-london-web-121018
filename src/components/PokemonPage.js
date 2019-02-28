import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash';
import API from '../adapters/API';
import { transformPokemon } from '../helpers';

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchInput: '',
  }

  addPokemon = pokemon => {
    this.setState({
      pokemons: [pokemon, ...this.state.pokemons]
    })
  }

  getPokemons = async () => {
    let pokemons = await API.getPokemons()
    pokemons = pokemons.map(transformPokemon)
    this.setState({ pokemons })
  }

  filterByInput = pokemons =>
    this.state.searchInput === ''
      ? pokemons
      : pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
    )

  get filteredPokemons() {
      return this.filterByInput(this.state.pokemons)
  }

  updateSearch = searchInput => {
    this.setState({
      searchInput: searchInput,
    })
  }

  componentDidMount () {
    this.getPokemons()
  }

  render() {
    const { updateSearch, filteredPokemons, addPokemon } = this
    return (
      <div>
        <h1 className="App-header">Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={(event) => updateSearch(event.target.value) } showNoResults={false} />
        <br />
        <PokemonForm addPokemon={addPokemon} />
        <br />
        <PokemonCollection pokemons={filteredPokemons}/>
      </div>
    )
  }
}

export default PokemonPage;
