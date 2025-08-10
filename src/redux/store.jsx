import { configureStore } from '@reduxjs/toolkit'
import handelWeatherReducer from './weatherSlice.jsx'

export const store = configureStore({
    reducer: {
        weather: handelWeatherReducer
    },
})