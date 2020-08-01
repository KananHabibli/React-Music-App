import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchNext } from '../reducers/dispatch'

export class Next extends Component {
    render() {
        return (
            <button className="btn btn-outline-info btn-block w-50 mx-auto my-5" onClick={() => this.props.fetchNext(this.props.nextUrl)}>Load More</button>
        )
    }
}

function mapPropsToState(state) {
    return {
        nextUrl: state.nextUrl
    }
}

function mapDispatchToState(dispatch) {
    return {
        fetchNext: nextUrl => dispatch(fetchNext(nextUrl))
    }
}

export default connect(mapPropsToState, mapDispatchToState)(Next)
