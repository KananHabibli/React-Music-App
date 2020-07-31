import React, { Component } from 'react'
import { connect } from 'react-redux'
import AudioPlayer from 'react-audio-player'

export class Mp3Player extends Component {
    render() {
        return (
            <AudioPlayer
                className="mx-auto my-5"
                src={this.props.currentSong}
                autoPlay
                controls
          />
        )
    }
}

function mapStateToProps(state) {
    return {
      currentSong: state.currentSong
    }
}

export default connect(mapStateToProps)(Mp3Player)
