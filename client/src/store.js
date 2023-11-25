
import { configureStore } from '@reduxjs/toolkit'
import customReducer from './CustomSlice'

export const store = configureStore({
    reducer: {
        custom: customReducer
    },
})