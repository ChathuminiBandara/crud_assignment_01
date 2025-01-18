export default function Home() {
    return (
        <>
            <div className="container mt-4">
                <h2>Welcome to the Dashboard</h2>
                <p>Your overview and quick access to important actions and data.</p>

                {/* Overview Section */}
                <div className="row">
                    {/* Card 1 - Quick Stats */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Total Logs</h5>
                                <p className="card-text">Keep track of all monitoring logs.</p>
                                <h2 className="display-4">100</h2>
                                <a href="/logs" className="btn btn-primary">View Logs</a>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 - Recent Activity */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Recent Activity</h5>
                                <ul className="list-unstyled">
                                    <li>Log #101 added by John</li>
                                    <li>Log #102 added by Jane</li>
                                    <li>Log #103 updated by Alex</li>
                                </ul>
                                <a href="/activity" className="btn btn-secondary">View All</a>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 - Alerts */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Recent Alerts</h5>
                                <ul className="list-unstyled">
                                    <li>Crop X has high humidity</li>
                                    <li>Staff Y reported unusual activity</li>
                                    <li>Crop Z needs immediate attention</li>
                                </ul>
                                <a href="/alerts" className="btn btn-danger">View Alerts</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Section */}
                <div className="row">
                    {/* Card 4 - Add Log */}
                    <div className="col-md-6 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Add New Log</h5>
                                <p className="card-text">Quickly add a new crop monitoring log.</p>
                                <a href="/add-log" className="btn btn-success">Add Log</a>
                            </div>
                        </div>
                    </div>

                    {/* Card 5 - Generate Report */}
                    <div className="col-md-6 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Generate Report</h5>
                                <p className="card-text">Generate reports based on logs and data.</p>
                                <a href="/generate-report" className="btn btn-info">Generate Report</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Section (Optional) */}
                <footer className="mt-5">
                    <div className="row">
                        <div className="col text-center">
                            <p>&copy; 2025 Your Website. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
