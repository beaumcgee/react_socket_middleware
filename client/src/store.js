
import { configureStore } from '@reduxjs/toolkit'
import customReducer from './customSlice'
import SocketMiddleware from './SocketMiddleware'

export const store = configureStore({
    reducer: {
        custom: customReducer
    },
    middleware : (getDefaultMiddleware) =>  getDefaultMiddleware().concat(SocketMiddleware())
})