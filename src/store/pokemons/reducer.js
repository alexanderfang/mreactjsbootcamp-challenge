const defaultValue = {
    data: [],
    favorites: [],
    error: null,
    loading: false,
  }
  
  export default function reducer(state = defaultValue, action) {
    switch (action.type) {
      case "SET_LOADING":
        return {
          ...state,
          loading: action.data,
        };
      case "SET_ERROR":
        return {
          ...state,
          error: action.data,
        };
      case "GET_POKEMONS":
        return {
          ...state,
          data: action.data,
        };
      case "ADD_FAVORITE":
        return {
          ...state,
          favorites: [...state.favorites, action.data],
        };
      case "REMOVE_FAVORITE":
        const temp = [...state.favorites];
        const index = state.favorites.indexOf(action.data);
  
        if(index >= 0) {
          temp.splice(index, 1);
        }
  
        return {
          ...state,
          favorites: [...temp],
        };
      default:
        return state;
    }
  }