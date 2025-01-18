import { createSlice} from '@reduxjs/toolkit';
import {Equipment} from "../models/equipment.tsx";

const initialState = {
    equipments: [] ,
}

const equipmentSlice = createSlice({
    name: 'equipment',
    initialState: initialState,
    reducers: {
        addEquipment: (state, {payload}) => {
            // @ts-ignore
            state.equipments.push(payload);
        },
        deleteEquipment: (state, {payload}) => {
            state.equipments = state.equipments.filter((equipment:Equipment) => equipment.id !== payload.id);
        },
        updateEquipment: (state, action) => {
            // @ts-ignore
            state.equipments = state.equipments.map((equipment:Equipment) =>
                equipment.id === action.payload.id ?
                    {...equipment, id: action.payload.id,
                        name: action.payload.name,
                        address: action.payload.address,
                        phone: action.payload.phone}
                    :equipment
            )
        }
    },
});

export const { addEquipment,deleteEquipment,updateEquipment } = equipmentSlice.actions;
export default equipmentSlice.reducer;