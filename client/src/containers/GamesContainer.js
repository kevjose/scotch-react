import React, {Component} from 'react';
import GamesListManager from '../components/GamesListManager';
import Modal from '../components/Modal';

export default class GamesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {games: [], selectedGame: {}, searchBar: ''};
    this.setSearchBar = this.setSearchBar.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.deleteGame = this.deleteGame.bind(this);
  }

  componentDidMount() {
    this.getGames();
  }

  getGames() {
    fetch('http://localhost:8080/games')
      .then(response => response.json())
      .then(data => this.setState({games: data}));
  }

  setSearchBar(event) {
    this.setState({searchBar: event.target.value.toLowerCase()});
  }

  toggleModal(index) {
    this.setState({selectedGame: this.state.games[index]});
    $('#game-modal').modal();
  }

  deleteGame(id) {
    fetch('http://localhost:8080/game/'+id, {
      method: 'DELETE'
    }).then(response => response.json())
      .then(response => {
        this.setState({games: this.state.games.filter(game => game._id !== id)})
        console.log(response);
      })
  }

  render() {
    const {games, searchBar, selectedGame} = this.state;
    return (
      <div>
        <Modal game={selectedGame}/>
        <GamesListManager games={games} searchBar={searchBar} setSearchBar={this.setSearchBar}
                          toggleModal={this.toggleModal} deleteGame={this.deleteGame} />
      </div>
    );
  }
}