import React, { useState } from "react";

type EquipmentEntity = {id: number;
    name: string;
    type: string;
    status: string;
    assignedStaff: string;
    assignedField: string;
    image1: string;
    image2: string;

};

const EquipmentManager: React.FC = () => {
    const [equipments, setEquipments] = useState<EquipmentEntity[]>([]);
    const [form, setForm] = useState<Omit<EquipmentEntity, "id">>({
        name: "",
        type: "",
        status: "",
        assignedStaff: "",
        assignedField: "",
        image1: "",
        image2: "",
    });

    const [editId, setEditId] = useState<number | null>(null);

    // Handle input changes
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    // Handle file changes
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files && files.length > 0) {
            setForm({ ...form, [name]: URL.createObjectURL(files[0]) });
        }
    };

    // Add or update an equipment entity
    const handleAddOrUpdate = () => {
        if (editId !== null) {
            setEquipments((prev) =>
                prev.map((equipment) =>
                    equipment.id === editId ? { ...form, id: editId } : equipment
                )
            );
            setEditId(null);
        } else {
            const newId = equipments.length ? equipments[equipments.length - 1].id + 1 : 1;
            setEquipments([...equipments, { ...form, id: newId }]);
        }

        setForm({
            name: "",
            type: "",
            status: "",
            assignedStaff: "",
            assignedField: "",
            image1: "",
            image2: "",
        });
    };

    // Edit an existing equipment entity
    const handleEdit = (id: number) => {
        const equipmentToEdit = equipments.find((equipment) => equipment.id === id);
        if (equipmentToEdit) {
            setForm(equipmentToEdit);
            setEditId(id);
        }
    };

    // Delete an equipment entity
    const handleDelete = (id: number) => {
        setEquipments(equipments.filter((equipment) => equipment.id !== id));
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Equipment Management</h2>
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
                            name="name"
                            placeholder="Equipment Name"
                            value={form.name}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="col-md-4">
                        <select
                            name="type"
                            value={form.type}
                            onChange={handleChange}
                            className="form-select"
                            required
                        >
                            <option value="">Select Type</option>
                            <option value="Heavy">Heavy</option>
                            <option value="Light">Light</option>
                            <option value="Utility">Utility</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <select
                            name="status"
                            value={form.status}
                            onChange={handleChange}
                            className="form-select"
                            required
                        >
                            <option value="">Select Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Under Maintenance">Under Maintenance</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <input
                            type="text"
                            name="assignedStaff"
                            placeholder="Assigned Staff"
                            value={form.assignedStaff}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="col-md-4">
                        <input
                            type="text"
                            name="assignedField"
                            placeholder="Assigned Field"
                            value={form.assignedField}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="col-md-4">
                        <input
                            type="file"
                            name="image1"
                            onChange={handleFileChange}
                            className="form-control"
                        />
                    </div>

                    <div className="col-md-4">
                        <input
                            type="file"
                            name="image2"
                            onChange={handleFileChange}
                            className="form-control"
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary mt-3">
                    {editId !== null ? "Update Equipment" : "Add Equipment"}
                </button>
            </form>

            <table className="table table-striped">
                <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Assigned Staff</th>
                    <th>Assigned Field</th>
                    <th>Image 1</th>
                    <th>Image 2</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {equipments.map((equipment) => (
                    <tr key={equipment.id}>
                        <th>{equipment.id}</th>
                        <td>{equipment.name}</td>
                        <td>{equipment.type}</td>
                        <td>{equipment.status}</td>
                        <td>{equipment.assignedStaff}</td>
                        <td>{equipment.assignedField}</td>
                        <td>
                            {equipment.image1 ? (
                                <img
                                    src={equipment.image1}
                                    alt="Equipment 1"
                                    style={{ width: "50px", height: "50px" }}
                                />
                            ) : (
                                "N/A"
                            )}
                        </td>
                        <td>
                            {equipment.image2 ? (
                                <img
                                    src={equipment.image2}
                                    alt="Equipment 2"
                                    style={{ width: "50px", height: "50px" }}
                                />
                            ) : (
                                "N/A"
                            )}
                        </td>
                        <td>
                            <button
                                className="btn btn-warning btn-sm me-2"
                                onClick={() => handleEdit(equipment.id)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(equipment.id)}
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

export default EquipmentManager;
