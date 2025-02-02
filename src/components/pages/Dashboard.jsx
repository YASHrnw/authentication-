import { useLocation, useNavigate } from "react-router-dom";
import BidList from "./BidList";

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { email, password } = location.state || {};

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card p-4 shadow-sm"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4">Dashboard</h2>
        <p>
          <strong>Email:</strong> {email || "No Email Provided"}
        </p>
        <p>
          <strong>Password:</strong> {password || "No Password Provided"}
        </p>
        <button className="btn btn-danger w-100" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="col-md-9">
        <BidList /> 
      </div>
    </div>
  );
}

export default Dashboard;
