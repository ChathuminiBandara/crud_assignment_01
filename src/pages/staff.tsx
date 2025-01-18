import React, { useState } from "react";

type StaffEntity = {
    id: number;
    firstName: string;
    lastName: string;
    designation: string;
    gender: string;
    joinedDate: string;
    dob: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    contactNo: string;
    role: string;
    field: string;
    vehicle: string;
    image: string;
};

const StaffManagement: React.FC = () => {
    const [staff, setStaff] = useState<StaffEntity[]>([]);
    const [form, setForm] = useState<Omit<StaffEntity, "id">>({
        firstName: "",
        lastName: "",
        designation: "",
        gender: "",
        joinedDate: "",
        dob: "",
        addressLine1: "",
        addressLine2: "",
        addressLine3: "",
        contactNo: "",
        role: "",
        field: "",
        vehicle: "",
        image: "",
    });

    const [editId, setEditId] = useState<number | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setForm({ ...form, image: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddOrUpdate = () => {
        if (editId !== null) {
            // Update an existing staff member
            setStaff((prevStaff) =>
                prevStaff.map((person) =>
                    person.id === editId ? { ...form, id: editId } : person
                )
            );
            setEditId(null);
        } else {
            // Add a new staff member
            const newId = staff.length ? staff[staff.length - 1].id + 1 : 1;
            setStaff([...staff, { ...form, id: newId }]);
        }
        setForm({
            firstName: "",
            lastName: "",
            designation: "",
            gender: "",
            joinedDate: "",
            dob: "",
            addressLine1: "",
            addressLine2: "",
            addressLine3: "",
            contactNo: "",
            role: "",
            field: "",
            vehicle: "",
            image: "",
        });
    };

    const handleEdit = (id: number) => {
        const staffToEdit = staff.find((person) => person.id === id);
        if (staffToEdit) {
            setForm(staffToEdit);
            setEditId(id);
        }
    };

    const handleDelete = (id: number) => {
        setStaff(staff.filter((person) => person.id !== id));
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Staff Management</h2>
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
                            name="firstName"
                            placeholder="First Name"
                            value={form.firstName}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={form.lastName}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="designation"
                            placeholder="Designation"
                            value={form.designation}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <select
                            name="gender"
                            value={form.gender}
                            onChange={handleChange}
                            className="form-control"
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <input
                            type="date"
                            name="joinedDate"
                            placeholder="Joined Date"
                            value={form.joinedDate}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="date"
                            name="dob"
                            placeholder="Date of Birth"
                            value={form.dob}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="addressLine1"
                            placeholder="Address Line 1"
                            value={form.addressLine1}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="addressLine2"
                            placeholder="Address Line 2"
                            value={form.addressLine2}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="addressLine3"
                            placeholder="Address Line 3"
                            value={form.addressLine3}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="contactNo"
                            placeholder="Contact No."
                            value={form.contactNo}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <select
                            name="role"
                            value={form.role}
                            onChange={handleChange}
                            className="form-control"
                            required
                        >
                            <option value="">Select Role</option>
                            <option value="Manager">Manager</option>
                            <option value="Staff">Staff</option>
                            <option value="Supervisor">Supervisor</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <select
                            name="vehicle"
                            value={form.vehicle}
                            onChange={handleChange}
                            className="form-control"
                            required
                        >
                            <option value="">Select Vehicle</option>
                            <option value="Car">Car</option>
                            <option value="Bike">Bike</option>
                            <option value="Truck">Truck</option>
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
                    {editId !== null ? "Update Staff" : "Add Staff"}
                </button>
            </form>

            <table className="table table-striped">
                <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Designation</th>
                    <th>Gender</th>
                    <th>Joined Date</th>
                    <th>DOB</th>
                    <th>Contact No.</th>
                    <th>Role</th>
                    <th>Vehicle</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {staff.map((person) => (
                    <tr key={person.id}>
                        <td>{person.id}</td>
                        <td>{person.firstName}</td>
                        <td>{person.lastName}</td>
                        <td>{person.designation}</td>
                        <td>{person.gender}</td>
                        <td>{person.joinedDate}</td>
                        <td>{person.dob}</td>
                        <td>{person.contactNo}</td>
                        <td>{person.role}</td>
                        <td>{person.vehicle}</td>
                        <td>
                            {person.image ? (
                                <img
                                    src={person.image}
                                    alt="Staff"
                                    style={{ width: "50px", height: "50px" }}
                                />
                            ) : (
                                "N/A"
                            )}
                        </td>
                        <td>
                            <button
                                className="btn btn-warning btn-sm me-2"
                                onClick={() => handleEdit(person.id)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(person.id)}
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

export default StaffManagement;
