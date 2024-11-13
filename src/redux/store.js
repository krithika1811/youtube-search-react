import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
    reducer: rootReducer,
});

export default store;

// import videoReducer from './videoSlice';

// const store = configureStore({
//     reducer: {
//         videos: videoReducer,
//     },
// });

// export default store;