import React, { Component } from 'react';

import Search from './components/Search'
import CoverImage from './components/CoverImage'
import Mp3Player from './components/Mp3Player'
import Songlist from './components/Songlist'
import Next from './components/Next'
import './assets/css/style.css'

class App extends Component {

  render() {
    return (
      <div className="container p-5">
          <div className="card mx-auto">
              <div className="card-header bg-info">
                  <Search />
              </div>
              
              <CoverImage />
              
              <Mp3Player />
          </div>
          <Songlist />
          <Next />
      </div>
    )
  }
}

export default App;
