import React, { Component } from 'react'
import { connect } from 'react-redux'

import { play } from '../reducers/dispatch'

class Songlist extends Component {

    render() {
        return (
            <ul className="list-group mb-4 mx-auto" id="result">
                {this.props.songlist.map((song, index) => 
                <li key={song.id} className="list-group-item">
                    <img src={song.album.cover_small} className='img-fluid' alt={song.title_short}/>
                    <button className="playSong" onClick={() => this.props.play(song.preview, song.album.cover_big)}><i className="fas fa-play mx-5"></i></button>
                    {song.title_short}<span className="badge badge-info float-right p-3">{index + 1}</span>
                </li>)}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
      songlist: state.songlist
    }
}

function mapDispatchToProps(dispatch){
    return{
        play : (currentSong, coverImage) => dispatch(play(currentSong, coverImage))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Songlist)
