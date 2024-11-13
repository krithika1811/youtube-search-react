const initialState = {
    videos: [],
    loading: false,
    error: null
};

export default function videoReducer(state = initialState, action) {
    switch(action.type) {
        case 'SEARCH_VIDEOS_REQUEST':
            return{...state, loading: true};
        case 'SEARCH_VIDEOS_SUCCESS':
            return {...state, videos: action.payload, loading: false };
        case 'SEARCH_VIDEOS_FAILURE':
            return { ...state, error: action.error, loading: false };
        default:
            return state;
    }
}