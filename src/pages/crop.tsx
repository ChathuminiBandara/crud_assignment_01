import React, { useState } from "react";

type CropItem = {
    cropCode: string;
    commonName: string;
    scientificName: string;
    cropImage: string; // Can be a URL or base64 string.
    category: string;
    cropSeason: string;
    field: string;
};

const CropManager: React.FC = () => {
    const [crops, setCrops] = useState<CropItem[]>([]);
    const [form, setForm] = useState<CropItem>({
        cropCode: "",
        commonName: "",
        scientificName: "",
        cropImage: "",
        category: "",
        cropSeason: "",
        field: "",
    });
    const [editIndex, setEditIndex] = useState<number | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleAddOrUpdate = () => {
        if (editIndex !== null) {
            // Update existing crop
            const updatedCrops = [...crops];
            updatedCrops[editIndex] = form;
            setCrops(updatedCrops);
            setEditIndex(null);
        } else {
            // Add new crop
            setCrops([...crops, form]);
        }
        setForm({
            cropCode: "",
            commonName: "",
            scientificName: "",
            cropImage: "",
            category: "",
            cropSeason: "",
            field: "",
        });
    };

    const handleEdit = (index: number) => {
        setForm(crops[index]);
        setEditIndex(index);
    };

    const handleDelete = (index: number) => {
        setCrops(crops.filter((_, i) => i !== index));
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Crop Managing Page</h2>
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
                            name="cropCode"
                            placeholder="Crop Code"
                            value={form.cropCode}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="commonName"
                            placeholder="Common Name"
                            value={form.commonName}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="scientificName"
                            placeholder="Scientific Name"
                            value={form.scientificName}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="cropImage"
                            placeholder="Crop Image URL"
                            value={form.cropImage}
                            className="form-control"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="category"
                            placeholder="Category"
                            value={form.category}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="cropSeason"
                            placeholder="Crop Season"
                            value={form.cropSeason}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="field"
                            placeholder="Field"
                            value={form.field}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">
                        {editIndex !== null ? "Update" : "Add"}</button>
            </form>

            <table className="table table-striped">
                <thead className="table-dark">
                <tr>
                    <th>Crop Code</th>
                    <th>Common Name</th>
                    <th>Scientific Name</th>
                    <th>Crop Image</th>
                    <th>Category</th>
                    <th>Crop Season</th>
                    <th>Field</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {crops.map((crop, index) => (
                    <tr key={index}>
                        <td>{crop.cropCode}</td>
                        <td>{crop.commonName}</td>
                        <td>{crop.scientificName}</td>
                        <td>
                            {crop.cropImage ? (
                                <img src={crop.cropImage} alt={crop.commonName} width={50} />
                            ) : (
                                "No Image"
                            )}
                        </td>
                        <td>{crop.category}</td>
                        <td>{crop.cropSeason}</td>
                        <td>{crop.field}</td>
                        <td>
                            <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(index)}>Edit</button>
                            <button className="btn btn-warning btn-sm" onClick={() => handleDelete(index)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CropManager;
