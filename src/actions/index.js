export const selectLibrary = (libraryId) => {
    console.log(libraryId);
    return {
        type: 'selectedLibrary',
        payload: libraryId

    };
};
