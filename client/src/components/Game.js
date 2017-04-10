import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

export default class Game extends PureComponent {
  render() {
    const {_id, i, name, description, toggleModal, deleteGame} = this.props;
    return (
      <div className="col-md-4">
        <div className="thumbnail">
          <div className="thumbnail-frame">
            <img src="//lorempixel.com/400/400" alt=""/>
          </div>
          <div className="caption">
            <h5>{name}</h5>
            <p className="description-thumbnail">{`${description.substring(0, 150)}...`}</p>
            <div className="btn-group" role="group" aria-label="...">
              <button className="btn btn-success" role="button" onClick={() => toggleModal(i)}>View</button>
              <button className="btn btn-danger" role="button" onClick={() => deleteGame(_id)}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}