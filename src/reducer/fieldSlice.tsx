import { createSlice} from '@reduxjs/toolkit';
import {Field} from "../models/field.tsx";

const initialState = {
    fields: [] ,
}

const FieldSlice = createSlice({
    name: 'field',
    initialState: initialState,
    reducers: {
        addField: (state, {payload}) => {
            // @ts-ignore
            state.fields.push(payload);
        },
        deleteField: (state, {payload}) => {
            state.fields = state.fields.filter((field:Field) => field.id !== payload.id);
        },
        updateField: (state, action) => {
            // @ts-ignore
            state.fields = state.fields.map((field:Field) =>
                field.id === action.payload.id ?
                    {...field, id: action.payload.id,
                        name: action.payload.name,
                        address: action.payload.address,
                        phone: action.payload.phone}
                    :field
            )
        }
    },
});

export const { addField,deleteField,updateField } = FieldSlice.actions;
export default FieldSlice.reducer;