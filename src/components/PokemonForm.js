import React from 'react';
import { Form } from 'semantic-ui-react';
import API from '../adapters/API';
import { transformPokemon } from '../helpers';

class PokemonForm extends React.Component {

    state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { name, hp, frontUrl, backUrl } = this.state
    const { addPokemon } = this.props
    const pokemon = {
      name,
      stats: [{
        name: 'hp',
        value: hp
      }],
      sprites: {
        front: frontUrl,
        back: backUrl,
      }
    }

    let newPokemon = await API.createPokemon(pokemon)
    addPokemon(transformPokemon(newPokemon))
  }

  render() {
    const { handleChange, handleSubmit } = this
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={handleChange} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={handleChange} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={handleChange} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input onChange={handleChange} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
