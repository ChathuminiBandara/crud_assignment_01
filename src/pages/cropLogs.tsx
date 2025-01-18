import React, { useState } from "react";

type MonitoringLog = {
    id: number;
    logCode: string;
    logDate: string;
    logDetails: string;
    observedBy: string;
    crop: string;
    staff: string;
    image: string; // URL of the uploaded image
};

const CropLogs: React.FC = () => {
    const [logs, setLogs] = useState<MonitoringLog[]>([]);
    const [form, setForm] = useState<Omit<MonitoringLog, "id">>({
        logCode: "",
        logDate: "",
        logDetails: "",
        observedBy: "",
        crop: "",
        staff: "",
        image: "",
    });
    const [editId, setEditId] = useState<number | null>(null);

    // Handle input field changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    // Handle image file input change
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Convert image to base64 or URL
            const reader = new FileReader();
            reader.onloadend = () => {
                setForm((prevForm) => ({ ...prevForm, image: reader.result as string }));
            };
            reader.readAsDataURL(file); // Read file as base64
        }
    };

    // Add or update log entry
    const handleAddOrUpdate = () => {
        if (editId !== null) {
            // Update existing log
            setLogs((prevLogs) =>
                prevLogs.map((log) => (log.id === editId ? { ...form, id: editId } : log))
            );
            setEditId(null);
        } else {
            // Add new log
            const newId = logs.length ? logs[logs.length - 1].id + 1 : 1;
            setLogs([...logs, { ...form, id: newId }]);
        }

        // Reset the form
        setForm({
            logCode: "",
            logDate: "",
            logDetails: "",
            observedBy: "",
            crop: "",
            staff: "",
            image: "",
        });
    };

    // Edit an existing log
    const handleEdit = (id: number) => {
        const logToEdit = logs.find((log) => log.id === id);
        if (logToEdit) {
            setForm(logToEdit);
            setEditId(id);
        }
    };

    // Delete a log entry
    const handleDelete = (id: number) => {
        setLogs(logs.filter((log) => log.id !== id));
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Monitoring Log Management</h2>

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
                            name="logCode"
                            placeholder="Log Code"
                            value={form.logCode}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="date"
                            name="logDate"
                            value={form.logDate}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <textarea
                            name="logDetails"
                            placeholder="Log Details"
                            value={form.logDetails}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="observedBy"
                            placeholder="Observed By"
                            value={form.observedBy}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <select
                            name="crop"
                            value={form.crop}
                            onChange={handleChange}
                            className="form-control"
                            required
                        >
                            <option value="">Select Crop</option>
                            <option value="Wheat">Wheat</option>
                            <option value="Rice">Rice</option>
                            <option value="Corn">Corn</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <select
                            name="staff"
                            value={form.staff}
                            onChange={handleChange}
                            className="form-control"
                            required
                        >
                            <option value="">Select Staff</option>
                            <option value="John">John</option>
                            <option value="Jane">Jane</option>
                            <option value="Alex">Alex</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <input
                            type="file"
                            name="image"
                            onChange={handleImageChange}
                            className="form-control"
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary mt-3">
                    {editId !== null ? "Update Log" : "Add Log"}
                </button>
            </form>

            <table className="table table-striped">
                <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Log Code</th>
                    <th>Log Date</th>
                    <th>Log Details</th>
                    <th>Observed By</th>
                    <th>Crop</th>
                    <th>Staff</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {logs.map((log) => (
                    <tr key={log.id}>
                        <td>{log.id}</td>
                        <td>{log.logCode}</td>
                        <td>{log.logDate}</td>
                        <td>{log.logDetails}</td>
                        <td>{log.observedBy}</td>
                        <td>{log.crop}</td>
                        <td>{log.staff}</td>
                        <td>
                            {log.image ? (
                                <img
                                    src={log.image}
                                    alt="Log Image"
                                    style={{ width: "50px", height: "50px" }}
                                />
                            ) : (
                                "N/A"
                            )}
                        </td>
                        <td>
                            <button
                                className="btn btn-warning btn-sm me-2"
                                onClick={() => handleEdit(log.id)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(log.id)}
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

export default CropLogs;
