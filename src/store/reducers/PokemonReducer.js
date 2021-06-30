const initialState = {
    favorite: []
};

function reducer(state = initialState, action){
    if(action.type === "ADD_TO_FAVORITE"){
        // Find if favorited item already on the list
        var find = state.favorite.findIndex((element) => element === action.payload)
        // If it is, remove the favorite
        if(find >= 0){
            state.favorite.splice(find, 1);
        }
        // Set new state
        const newState = {
            ...state,
            favorite: find >= 0 ? state.favorite : [...state.favorite, action.payload]
        }
        
        return newState;
    }
    return state;
}

export default reducer;