
const initialState = {
  userSearchboxInput: '',
  dropdownMenuSelection: '',
  albumList: [],
  querying: false
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_INPUT':
      return Object.assign({}, state, {
        userSearchboxInput: action.userSearchboxInput
      })

    case 'SET_DROPDOWN_SELECTION':
      return Object.assign({}, state, {
        dropdownMenuSelection: action.dropdownMenuSelection
      })

    case 'RECEIVE_ALBUMS':
      return Object.assign({}, state, {
        albumList: action.albumList,
        querying: false
      })

    case 'REQUEST_ALBUMS':
      return Object.assign({}, state, {
        querying: true
      })

    case 'REQUEST_FAILED':
      return Object.assign({}, state, {
        requestError: action.error
      })


    default:
      return state
  }

}

export default reducer


/* 

    case 'REQUEST_ALBUMS':
      return Object.assign({}, state, {
        artistBeingSearched: action.searchTerm
      })

    case 'REQUEST_FAILED':
      return Object.assign({}, state, {
        requestError: action.error
      })


*/
