
import { createSlice } from '@reduxjs/toolkit';

export const customSlice = createSlice({
    name: 'custom',
    initialState: {
        value: 'Unset'
    },
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setValue } = customSlice.actions;

export default customSlice.reducer
