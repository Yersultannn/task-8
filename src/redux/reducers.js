// src/redux/reducers.js
const initialState = {
    ads: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_AD':
            return {
                ...state,
                ads: [...state.ads, action.payload],
            };
        case 'DELETE_AD':
            return {
                ...state,
                ads: state.ads.filter((ad) => ad.id !== action.payload),
            };
        default:
            return state;
    }
};

export default rootReducer;
