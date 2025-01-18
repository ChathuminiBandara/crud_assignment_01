import React, { useState } from "react";

type FieldEntity = {
    id: number;
    name: string;
    location: string;
    size: string;
    crops: string;
    staff: string;
    image1: string;
    image2: string;
};

const FieldManager: React.FC = () => {
    const [fields, setFields] = useState<FieldEntity[]>([]);
    const [form, setForm] = useState<Omit<FieldEntity, "id">>({
        name: "",
        location: "",
        size: "",
        crops: "",
        staff: "",
        image1: "",
        image2: "",
    });

    const [editId, setEditId] = useState<number | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleAddOrUpdate = () => {
        if (editId !== null) {
            // Update an existing field
            setFields((prevFields) =>
                prevFields.map((field) =>
                    field.id === editId ? { ...form, id: editId } : field
                )
            );
            setEditId(null);
        } else {
            // Add a new field
            const newId = fields.length ? fields[fields.length - 1].id + 1 : 1;
            setFields([...fields, { ...form, id: newId }]);
        }
        setForm({
            name: "",
            location: "",
            size: "",
            crops: "",
            staff: "",
            image1: "",
            image2: "",
        });
    };

    const handleEdit = (id: number) => {
        const fieldToEdit = fields.find((field) => field.id === id);
        if (fieldToEdit) {
            setForm(fieldToEdit);
            setEditId(id);
        }
    };

    const handleDelete = (id: number) => {
        setFields(fields.filter((field) => field.id !== id));
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Field Entity Management</h2>
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
                            placeholder="Field Name"
                            value={form.name}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="location"
                            placeholder="Field Location"
                            value={form.location}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="size"
                            placeholder="Extend Size"
                            value={form.size}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="crops"
                            placeholder="Crops"
                            value={form.crops}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="staff"
                            placeholder="Staff"
                            value={form.staff}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="image1"
                            placeholder="Field Image 1 URL"
                            value={form.image1}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="image2"
                            placeholder="Field Image 2 URL"
                            value={form.image2}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    {editId !== null ? "Update Field" : "Add Field"}
                </button>
            </form>
            <table className="table table-striped">
                <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Field Name</th>
                    <th>Location</th>
                    <th>Size</th>
                    <th>Crops</th>
                    <th>Staff</th>
                    <th>Field Image 1</th>
                    <th>Field Image 2</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {fields.map((field) => (
                    <tr key={field.id}>
                        <th>{field.id}</th>
                        <td>{field.name}</td>
                        <td>{field.location}</td>
                        <td>{field.size}</td>
                        <td>{field.crops}</td>
                        <td>{field.staff}</td>
                        <td>
                            {field.image1 ? (
                                <img
                                    src={field.image1}
                                    alt="Field 1"
                                    style={{ width: "50px", height: "50px" }}
                                />
                            ) : (
                                "N/A"
                            )}
                        </td>
                        <td>
                            {field.image2 ? (
                                <img
                                    src={field.image2}
                                    alt="Field 2"
                                    style={{ width: "50px", height: "50px" }}
                                />
                            ) : (
                                "N/A"
                            )}
                        </td>
                        <td>
                            <button
                                className="btn btn-warning btn-sm me-2"
                                onClick={() => handleEdit(field.id)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(field.id)}
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

export default FieldManager;
