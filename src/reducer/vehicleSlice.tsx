import { createSlice} from '@reduxjs/toolkit';
import {Vehicle} from "../models/vehicle.tsx";

const initialState = {
    vehicles: [] ,
}

const VehicleSlice = createSlice({
    name: 'vehicle',
    initialState: initialState,
    reducers: {
        addVehicle: (state, {payload}) => {
            // @ts-ignore
            state.vehicles.push(payload);
        },
        deleteVehicle: (state, {payload}) => {
            state.vehicles = state.vehicles.filter((vehicle:Vehicle) => vehicle.id !== payload.id);
        },
        updateVehicle: (state, action) => {
            // @ts-ignore
            state.vehicles = state.vehicles.map((vehicle:Vehicle) =>
                vehicle.id === action.payload.id ?
                    {...vehicle, id: action.payload.id,
                        name: action.payload.name,
                        address: action.payload.address,
                        phone: action.payload.phone}
                    :vehicle
            )
        }
    },
});

export const { addVehicle,deleteVehicle,updateVehicle } = VehicleSlice.actions;
export default VehicleSlice.reducer;