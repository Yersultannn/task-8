// src/redux/actions.js
export const addAd = (text) => ({
    type: 'ADD_AD',
    payload: {
        id: Math.random().toString(36).substr(2, 9),
        text,
    },
});

export const deleteAd = (id) => ({
    type: 'DELETE_AD',
    payload: id,
});
