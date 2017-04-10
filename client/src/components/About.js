import React, {PureComponent} from 'react';

export default class About extends PureComponent {
  render(){
    return (
      <div className="inner cover">
        <h1 className="cover-heading">Javascript Everything</h1>
        <p className="lead">Made with love in NodeJs and ReactJS</p>
      </div>
    );
  }
}