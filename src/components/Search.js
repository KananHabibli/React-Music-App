import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchSongs } from '../reducers/dispatch'

export class Search extends Component {

    constructor(props) {
        super(props)
        this.state = { value: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchData(this.state.value)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="mx-auto my-5 h-75 w-75">
                <label className="display-4 d-block text-center text-light my-4" htmlFor="artist">Name an artist</label>
                <input type="text" className="form-control form-control-lg" value={this.state.value} onKeyUp={() => this.props.fetchData(this.state.value)} onChange={this.handleChange} placeholder="Alan Walker" autoComplete="off" />
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
      songlist: state.songlist,
      url : state.url
    }
  }
  
  function mapDispatchToProps(dispatch){
    return{
      fetchData : artist => dispatch(fetchSongs(artist))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Search)
