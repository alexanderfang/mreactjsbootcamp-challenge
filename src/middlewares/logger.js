const logger = ({ dispatch, getState }) => next => action => {  
    return next(action);
}

export default logger;