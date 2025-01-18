import React, { useState } from "react";

type VehicleEntity = {
    id: number;
    vehicleCode: string;
    licensePlate: string;
    vehicleCategory: string;
    fuelType: string;
    status: string;
    allocatedStaff: string;
    remarks: string;
    image1: File | null;
    image2: File | null;
};

const Vehicle: React.FC = () => {
    const [vehicles, setVehicles] = useState<VehicleEntity[]>([]);
    const [form, setForm] = useState<Omit<VehicleEntity, "id">>({
        vehicleCode: "",
        licensePlate: "",
        vehicleCategory: "",
        fuelType: "Petrol",
        status: "Available",
        allocatedStaff: "",
        remarks: "",
        image1: null,
        image2: null,
    });

    const [editId, setEditId] = useState<number | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, imageKey: "image1" | "image2") => {
        if (e.target.files) {
            setForm({ ...form, [imageKey]: e.target.files[0] });
        }
    };

    const handleAddOrUpdate = () => {
        if (editId !== null) {
            // Update an existing vehicle
            setVehicles((prevVehicles) =>
                prevVehicles.map((vehicle) =>
                    vehicle.id === editId ? { ...form, id: editId } : vehicle
                )
            );
            setEditId(null);
        } else {
            // Add a new vehicle
            const newId = vehicles.length ? vehicles[vehicles.length - 1].id + 1 : 1;
            setVehicles([...vehicles, { ...form, id: newId }]);
        }
        setForm({
            vehicleCode: "",
            licensePlate: "",
            vehicleCategory: "",
            fuelType: "Petrol",
            status: "Available",
            allocatedStaff: "",
            remarks: "",
            image1: null,
            image2: null,
        });
    };

    const handleEdit = (id: number) => {
        const vehicleToEdit = vehicles.find((vehicle) => vehicle.id === id);
        if (vehicleToEdit) {
            setForm(vehicleToEdit);
            setEditId(id);
        }
    };

    const handleDelete = (id: number) => {
        setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Vehicle Management</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleAddOrUpdate();
                }}
                className="mb-4"
            >
                <div className="row g-3">
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="vehicleCode"
                            placeholder="Vehicle Code"
                            value={form.vehicleCode}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="licensePlate"
                            placeholder="License Plate"
                            value={form.licensePlate}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="vehicleCategory"
                            placeholder="Vehicle Category"
                            value={form.vehicleCategory}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <select
                            name="fuelType"
                            value={form.fuelType}
                            onChange={handleChange}
                            className="form-control"
                            required
                        >
                            <option value="Petrol">Petrol</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Electric">Electric</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <select
                            name="status"
                            value={form.status}
                            onChange={handleChange}
                            className="form-control"
                            required
                        >
                            <option value="Available">Available</option>
                            <option value="In Use">In Use</option>
                            <option value="Under Maintenance">Under Maintenance</option>
                            <option value="Retired">Retired</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="allocatedStaff"
                            placeholder="Allocated Staff"
                            value={form.allocatedStaff}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <textarea
                            name="remarks"
                            placeholder="Remarks"
                            value={form.remarks}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="file"
                            name="image1"
                            onChange={(e) => handleFileChange(e, "image1")}
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="file"
                            name="image2"
                            onChange={(e) => handleFileChange(e, "image2")}
                            className="form-control"
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    {editId !== null ? "Update Vehicle" : "Add Vehicle"}
                </button>
            </form>

            <table className="table table-striped">
                <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Vehicle Code</th>
                    <th>License Plate</th>
                    <th>Vehicle Category</th>
                    <th>Fuel Type</th>
                    <th>Status</th>
                    <th>Allocated Staff</th>
                    <th>Remarks</th>
                    <th>Vehicle Image 1</th>
                    <th>Vehicle Image 2</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {vehicles.map((vehicle) => (
                    <tr key={vehicle.id}>
                        <th>{vehicle.id}</th>
                        <td>{vehicle.vehicleCode}</td>
                        <td>{vehicle.licensePlate}</td>
                        <td>{vehicle.vehicleCategory}</td>
                        <td>{vehicle.fuelType}</td>
                        <td>{vehicle.status}</td>
                        <td>{vehicle.allocatedStaff}</td>
                        <td>{vehicle.remarks}</td>
                        <td>
                            {vehicle.image1 ? (
                                <img
                                    src={URL.createObjectURL(vehicle.image1)}
                                    alt="Vehicle 1"
                                    style={{ width: "50px", height: "50px" }}
                                />
                            ) : (
                                "N/A"
                            )}
                        </td>
                        <td>
                            {vehicle.image2 ? (
                                <img
                                    src={URL.createObjectURL(vehicle.image2)}
                                    alt="Vehicle 2"
                                    style={{ width: "50px", height: "50px" }}
                                />
                            ) : (
                                "N/A"
                            )}
                        </td>
                        <td>
                            <button
                                className="btn btn-warning btn-sm me-2"
                                onClick={() => handleEdit(vehicle.id)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(vehicle.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Vehicle;
