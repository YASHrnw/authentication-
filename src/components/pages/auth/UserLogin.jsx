import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserLogin() {
  const [error, setError] = useState({ status: false, msg: "", type: "" });

    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    if (actualData.email && actualData.password) {
      console.log(actualData);
      e.target.reset();
      setError({ status: true, msg: "Login success", type: "success" });

      // Navigate to Dashboard with Data
        navigate("/dashboard", { state: actualData });
        localStorage.setItem("userData", JSON.stringify(actualData)); 
    } else {
      setError({
        status: true,
        msg: "All Fields are required",
        type: "danger",
      });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center ">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="text-center">User Login</h3>

        <form id="login-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>

        {error.status && (
          <div className={`alert alert-${error.type} mt-3`} role="alert">
            {error.msg}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserLogin;
