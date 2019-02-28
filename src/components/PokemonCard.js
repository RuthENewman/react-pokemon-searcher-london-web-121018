import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    flipped: false,
  }

  flipCard = () => {
    this.setState({
      flipped: !this.state.flipped,
    })
  }

  render() {
    const { pokemon } = this.props
    const { flipped } = this.state
    const { flipCard } = this
    const imageSrc = flipped
      ? pokemon.sprites.back
      : pokemon.sprites.front
    return (

      <Card onClick={flipCard}>
        <div>
          <div className="image">
            <img src={imageSrc} alt={pokemon.name} />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.stats.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
