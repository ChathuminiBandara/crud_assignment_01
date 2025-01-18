import { createSlice} from '@reduxjs/toolkit';
import {Staff} from "../models/staff.tsx";

const initialState = {
    staffs: [] ,
}

const StaffSlice = createSlice({
    name: 'staff',
    initialState: initialState,
    reducers: {
        addStaff: (state, {payload}) => {
            // @ts-ignore
            state.staffs.push(payload);
        },
        deleteStaff: (state, {payload}) => {
            state.staffs = state.staffs.filter((staff:Staff) => staff.id !== payload.id);
        },
        updateStaff: (state, action) => {
            // @ts-ignore
            state.staffs = state.staffs.map((staff:Staff) =>
                staff.id === action.payload.id ?
                    {...staff, id: action.payload.id,
                        name: action.payload.name,
                        address: action.payload.address,
                        phone: action.payload.phone}
                    :staff
            )
        }
    },
});

export const { addStaff,deleteStaff,updateStaff } = StaffSlice.actions;
export default StaffSlice.reducer;