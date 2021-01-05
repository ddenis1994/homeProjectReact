export const SELECT_FOLDER='SELECT_FOLDER';

export const selectFolder= folder =>({
    type:SELECT_FOLDER,
    payload:{folder},
});

export const DELETE_FOLDER='DELETE_FOLDER';

export const deleteFolder= folder =>({
    type:DELETE_FOLDER,
    payload:{folder},
});

export const UPDATE_FOLDER='UPDATE_FOLDER';


export const updateFolder= folder =>({
    type:UPDATE_FOLDER,
    payload:{folder},
});