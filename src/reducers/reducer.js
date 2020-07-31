import * as actionTypes from './actions'

const defaultState = {
    songlist: [],
    url: '',
    currentSong: '',
    coverImage: ''
}

function reducer(state = defaultState, action){
    switch(action.type){
        case actionTypes.FETCH_SONGS:
            return {
                ...state,
                songlist: action.payload.data,
                url: action.payload.next
            }
        case actionTypes.GET_CURRENTSONG:
            return {
                ...state,
                currentSong: action.payload.currentSong,
                coverImage: action.payload.coverImage
            }
        default: 
            console.log('reducer called')
            return state
    }
}




export default reducer