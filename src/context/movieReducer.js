export default (state, action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return {
        ...state,
        movies: action.payload,
      };
    case 'GET_MOVIE_INFO':
      return {
        ...state,
        singleMovie: action.payload,
        loading: false,
      };
    case 'GET_MOVIE_TRAILER':
      return {
        ...state,
        singleMovieTrailer: action.payload[0],
      };
    case 'CLEAN_UP_TRAILER':
      return {
        ...state,
        singleMovieTrailer: {},
      };
    case 'GET_SCREENSHOTS':
      return {
        ...state,
        screenshots: action.payload,
        loading: false,
      };
    case 'GET_REVIEWS':
      return {
        ...state,
        reviews: action.payload,
        loading: false,
      };
    case 'GET_SIMILAR_MOVIES':
      return {
        ...state,
        similarMovies: action.payload,
        loading: false,
      };
    case 'GET_MOVIE_CAST':
      return {
        ...state,
        movieCast: action.payload.cast,
        movieCrew: action.payload.crew,
        loading: false,
      };
    case 'GET_PERSON_INFO':
      return {
        ...state,
        personInfo: action.payload,
        loading: false,
      };
    case 'GET_PERSON_MOVIES':
      return {
        ...state,
        personCast: action.payload.cast,
        personCrew: action.payload.crew,
        loading: false,
      };
    case 'SET_QUERY':
      return {
        ...state,
        query: action.payload,
      };
    case 'SEARCH_MOVIES':
      return {
        ...state,
        results: action.payload,
        query: state.query,
        loading: false,
      };
    case 'CHANGE_LANG':
      return {
        ...state,
        lang: state.lang === 'en-US' ? 'es-ES' : 'en-US',
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
