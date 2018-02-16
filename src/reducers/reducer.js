
const initialState = {
  userSearchboxInput: '',
  dropdownMenuSelection: '',
  albumList: [],
  searching: false,
  error: false
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_INPUT':
      return Object.assign({}, state, {
        userSearchboxInput: action.userSearchboxInput,
        searching: true
      })

    case 'SET_DROPDOWN_SELECTION':
      return Object.assign({}, state, {
        dropdownMenuSelection: action.dropdownMenuSelection,
        searching: true
      })

    case 'RECEIVE_ALBUMS':
      return Object.assign({}, state, {
        albumList: action.albumList,
        searching: false,
        error: false
      })

    case 'REQUEST_ALBUMS':
      return Object.assign({}, state, {
        searching: true
      })

    case 'REQUEST_FAILED':
      return Object.assign({}, state, {
        error: true
      })

    case 'CLEAR_USER_INPUT':
      return Object.assign({}, state, {
        userSearchboxInput: '',
        dropdownMenuSelection: ''
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
