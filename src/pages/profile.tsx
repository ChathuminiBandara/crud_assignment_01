import React, { useState } from 'react';
import './Profile.css'; //

export default function Profile() {
    const [form, setForm] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'Software developer with a passion for creating user-friendly web applications.',
        profilePicture: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setForm({ ...form, profilePicture: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Profile updated:', form);
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <div className="profile-image-container">
                        <img
                            src={form.profilePicture || 'https://via.placeholder.com/150'}
                            alt="Profile"
                            className="profile-image"
                        />
                        <label htmlFor="profilePictureInput" className="upload-btn">
                            Change Photo
                        </label>
                        <input
                            type="file"
                            id="profilePictureInput"
                            accept="image/*"
                            onChange={handleProfilePicChange}
                            style={{ display: 'none' }}
                        />
                    </div>
                    <h2 className="profile-name">{form.name}</h2>
                    <p className="profile-bio">{form.bio}</p>
                </div>
                <form onSubmit={handleSubmit} className="profile-form">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email address"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio">Bio</label>
                        <textarea
                            id="bio"
                            name="bio"
                            rows={4}
                            value={form.bio}
                            onChange={handleChange}
                            placeholder="Tell us a little about yourself"
                        />
                    </div>
                    <button type="submit" className="save-btn">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}
