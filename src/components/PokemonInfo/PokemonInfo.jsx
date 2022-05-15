import { Component } from 'react';
import PokemonFallbackView from 'components/PokemonErrorView/PokemonErrorView';
import PokemonDataView from 'components/PokemonDataView/PokemonDataView';
import { ImSpinner } from 'react-icons/im';
export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      this.setState({ status: 'pending' });
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`Нет покемона с именем ${this.props.pokemonName}`)
          );
        })
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    if (status === 'idle') {
      return <div>Введите имя покемона</div>;
    }
    if (status === 'pending') {
      return (
        <div>
          <ImSpinner size="32" />
          Загружаем...
        </div>
      );
    }
    if (status === 'rejected') {
      return <PokemonFallbackView message={error.message} />;
    }
    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}
