import {
    combineReducers,
    configureStore,
    PayloadAction,
    ThunkAction,
    Action,
    getDefaultMiddleware
  } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
// import counterReducer from './features/counterSlice';
import modalReducer from './modalSlice';
import logger from 'redux-logger';

const reducer = (state, action) => {
    return combineReducers({
        modal : modalReducer
    })(state, action)
};

const makeStore = () => {
    return configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    })
}

// const store = makeStore();

export const wrapper = createWrapper(makeStore, {
    debug: process.env.NODE_ENV === 'development'
});