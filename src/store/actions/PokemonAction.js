// Action Creator
export const addToFavorite = (id) =>{
    return {
        type: "ADD_TO_FAVORITE",
        payload: id
    };
}