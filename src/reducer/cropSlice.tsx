import { createSlice} from '@reduxjs/toolkit';
import {Crop} from "../models/crop.tsx";

const initialState = {
    crops: [] ,
}

const CropSlice = createSlice({
    name: 'crops',
    initialState: initialState,
    reducers: {
        addCrops: (state, {payload}) => {
            // @ts-ignore
            state.crops.push(payload);
        },
        deleteCrops: (state, {payload}) => {
            state.crops = state.crops.filter((crop:Crop) => crop.cropCode !== payload.id);
        },
        updateCrops: (state, action) => {
            // @ts-ignore
            state.crops = state.crops.map((crop:Crop) =>
                crop.cropCode === action.payload.id ?
                    {...crop, id: action.payload.id,
                        name: action.payload.name,
                        address: action.payload.address,
                        phone: action.payload.phone}
                    :crop
            )
        }
    },
});

export const { addCrops,deleteCrops,updateCrops } = CropSlice.actions;
export default CropSlice.reducer;