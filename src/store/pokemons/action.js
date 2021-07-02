import axios from 'axios';

export const getPokemons = () => {
  return (dispatch) => {
    dispatch({type: "SET_LOADING", data: true});
    return new Promise((resolve, reject) => {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=12')
        .then(({ data }) => {
          dispatch({
            type: "GET_POKEMONS",
            data: data.results,
          });
          dispatch({type: "SET_LOADING", data: false});
        }).catch(err => {
          dispatch({type: "CATCH_ERROR", data: err})
        });
    });
  }
}

export function addFavorite(id) {
  return {
    type: "ADD_FAVORITE",
    data: id,
  }
}

export function removeFavorite(id) {
  return {
    type: "REMOVE_FAVORITE",
    data: id,
  }
}