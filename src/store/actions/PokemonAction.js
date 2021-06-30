// Action Creator
export function addToFavorite(id){
    return {
        type: "ADD_TO_FAVORITE",
        payload: id
    };
}