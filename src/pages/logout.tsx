export default function Logout() {
    return (
        <div className="container text-center my-5">
            <div className="card shadow p-4 mx-auto" style={{ maxWidth: "400px" }}>
                <h3 className="mb-3 text-danger">Are you sure you want to logout?</h3>
                <p className="text-muted">You will need to log in again to access your account.</p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <button
                        className="btn btn-danger px-4 py-2"
                        onClick={() => {
                            // Add your logout logic here
                            console.log("User logged out");
                        }}
                    >
                        Logout
                    </button>
                    <button
                        className="btn btn-secondary px-4 py-2"
                        onClick={() => {
                            // Navigate back or cancel action
                            console.log("Logout cancelled");
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
