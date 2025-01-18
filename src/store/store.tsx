import {configureStore} from "@reduxjs/toolkit";
// @ts-ignore
import CropSlice from "../reducer/cropSlice.tsx"
// @ts-ignore
import StaffSlice from "../reducer/staffSlice.tsx"
// @ts-ignore
import EquipmentSlice  from "../reducer/equipmentSlice.tsx";
// @ts-ignore
import LogSlice from "../reducer/logSlice.tsx";
// @ts-ignore
import VehicleSlice from "../reducer/vehicleSlice.tsx";
// @ts-ignore
import FieldSlice from "../reducer/fieldSlice.tsx";

export const store = configureStore({
    reducer: {
        crop: CropSlice,
        staff: StaffSlice,
        equipment: EquipmentSlice,
        log: LogSlice,
        vehicle: VehicleSlice,
        field: FieldSlice,
    },
});