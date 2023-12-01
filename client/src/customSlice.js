
import { createSlice } from '@reduxjs/toolkit';

export const customSlice = createSlice({
    name: 'custom',
    initialState: {
        value: 'Unset'
    },
    reducers: {
        setCustomValue: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setCustomValue } = customSlice.actions;

export default customSlice.reducer
