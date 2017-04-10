import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Welcome, About} from './components';
import {GamesContainer} from './containers';

const routes = (
    <div className="main">
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          <div className="cover-container">
            <Router>
              <div>
                <div className="masthead clearfix">
                  <div className="inner">
                    <nav>
                      <ul className="nav masthead-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/games">Games</Link></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <Route exact path="/" component={Welcome}/>
                <Route path="/about" component={About}/>
                <Route path="/games" component={GamesContainer}/>
              </div>
            </Router>
          </div>
        </div>
      </div>
    </div>
  )
;

export default routes;