import React, { Component } from 'react'
import { connect } from 'react-redux'
export class CoverImage extends Component {
    render() {
        return (
            <div className="image mx-auto mt-4 w-75">
                <img src={this.props.coverImage === '' ? '/images/deezer.jpg' : this.props.coverImage } className="card-img-top" alt="Music" />
            </div>
        )
    }
}

function mapPropsToState(state) {
    return {
        coverImage: state.coverImage
    }
}

export default connect(mapPropsToState)(CoverImage)
