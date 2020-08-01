import * as actionTypes from './actions'

const defaultState = {
    songlist: [],
    nextUrl: '',
    currentSong: '',
    coverImage: ''
}

function reducer(state = defaultState, action){
    switch(action.type){
        case actionTypes.FETCH_SONGS:
            return {
                ...state,
                songlist: action.payload.data,
                nextUrl: action.payload.next
            }
        case actionTypes.GET_CURRENTSONG:
            return {
                ...state,
                currentSong: action.payload.currentSong,
                coverImage: action.payload.coverImage
            }
        case actionTypes.FETCH_NEXT:
            return {
                ...state,
                songlist: [ ...state.songlist, ...action.payload.data],
                nextUrl: action.payload.next
            }
        default: 
            console.log('reducer called')
            return state
    }
}




export default reducer