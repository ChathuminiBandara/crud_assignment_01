import { createSlice} from '@reduxjs/toolkit';
import {Logs} from "../models/logs.tsx";

const initialState = {
    logs: [] ,
}

const LogSlice = createSlice({
    name: 'log',
    initialState: initialState,
    reducers: {
        addlog: (state, {payload}) => {
            // @ts-ignore
            state.logs.push(payload);
        },
        deletelog: (state, {payload}) => {
            state.logs = state.logs.filter((log:Logs) => log.id !== payload.id);
        },
        updatelog: (state, action) => {
            // @ts-ignore
            state.logs = state.logs.map((log:Logs) =>
                log.id === action.payload.id ?
                    {...log, id: action.payload.id,
                        name: action.payload.name,
                        address: action.payload.address,
                        phone: action.payload.phone}
                    :log
            )
        }
    },
});

export const { addlog,deletelog,updatelog } = LogSlice.actions;
export default LogSlice.reducer;