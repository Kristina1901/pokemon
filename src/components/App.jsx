import { Component } from 'react';
import PokemonForm from './PokemonForm/PokemonForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PokemonInfo from './PokemonInfo/PokemonInfo';
export default class App extends Component {
  state = {
    pokemonName: '',
  };
  handleSearchFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };
  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm qwe={this.handleSearchFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer />
      </div>
    );
  }
}
