const initialState = { favMoviesID: [] }

function favMovies(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'SAVE_MOVIE':
      nextState = {
        ...state,
        favMoviesID: [...state.favMoviesID, action.value]
      };
      return nextState || state
    case 'UNSAVE_MOVIE':
      nextState = {
        ...state,
        favMoviesID: state.favMoviesID.filter(id => id !== action.value)
      };
      return nextState || state
    default:
      return state
  };
}

export default favMovies;