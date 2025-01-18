export default function Contact() {
    return (
        <>
            <div className="container mt-5">
                <h2 className="mb-4">Contact Us</h2>
                <p>If you have any questions or inquiries, feel free to reach out to us using the form below.</p>

                {/* Contact Form Section */}
                <div className="row">
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Get in Touch</h5>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Full Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email Address</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea className="form-control" id="message" rows={5} placeholder="Enter your message" required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info Section */}
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Our Contact Information</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <strong>Email:</strong> greenshadow@support.com
                                    </li>
                                    <li>
                                        <strong>Phone:</strong> +94 70 528 1001
                                    </li>
                                    <li>
                                        <strong>Address:</strong> 1234 Main Street, Moratuwa, Sri Lanka.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
