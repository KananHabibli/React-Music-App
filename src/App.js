import React, { Component } from 'react';

import Search from './components/Search'
import CoverImage from './components/CoverImage'
import Mp3Player from './components/Mp3Player'
import Songlist from './components/Songlist'

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
        {/*  <a className="btn btn-outline-info btn-block w-50 mx-auto my-5" href={this.state.loadMore}>Load More</a> */}
      </div>
    )
  }
}

export default App;
