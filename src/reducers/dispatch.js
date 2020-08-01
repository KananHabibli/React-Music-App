import { FETCH_SONGS, GET_CURRENTSONG, FETCH_NEXT } from './actions'
import axios from 'axios'


const url = 'https://deezerdevs-deezer.p.rapidapi.com/search'

export const fetchSongs = artist => {
    return dispatch => {
        axios( {
            url: `${url}?q=${artist}`,
            method: 'get',
            "headers": {
              "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
              "x-rapidapi-key": "253c117fdcmsh5602d98a536a494p13cf6cjsn373ae510bc6f"
            } })
        .then(res => {
            console.log(res)
            dispatch({
                type: FETCH_SONGS,
                payload: res.data
            })
        })
    }
}

export const play = (currentSong, coverImage) => {
    console.log(currentSong)
    return dispatch => dispatch({
        type: GET_CURRENTSONG,
        payload: {
            currentSong,
            coverImage
        }
    })
}


export const fetchNext = (url) => {
    return dispatch => axios.get(`https://cors-anywhere.herokuapp.com/${url}`)
        .then(res => {
            console.log(res)
            dispatch({
                type: FETCH_NEXT,
                payload: res.data
            })
        })
        .catch(error => console.log(error))
    
}