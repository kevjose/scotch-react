import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import Game from './Game';

export default class GamesListManager extends PureComponent {
  render() {
    const {games, searchBar, setSearchBar, toggleModal, deleteGame } = this.props;
    return (
      <div className="inner cover scrollable">
        <div className="row">
          <input type="search" placeholder="Search by Name" className="form-control search-bar" onKeyUp={setSearchBar} />
        </div>
        <div className="row">
          {
            games
              .filter(game => game.name.toLowerCase().includes(searchBar))
              .map((game, i) => {
              return (
                <Game {...game } key={game._id} i={i} toggleModal={toggleModal} deleteGame={deleteGame} />
              );
            })
          }
        </div>
      </div>
    );
  }
}