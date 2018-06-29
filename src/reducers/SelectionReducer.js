export default (state = null, action) => {
    console.log(action);
    switch (action.type) {
        case 'selectedLibrary':
            return action.payload;
        default:
            return state;
    }
};
