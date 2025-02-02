import { useState } from "react";

function Registration() {
  const [error, setError] = useState({ status: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      password_confirmation: data.get("password_confirmation"),
      tc: data.get("tc"),
    };

    if (
      actualData.name &&
      actualData.email &&
      actualData.password &&
      actualData.tc !== null
    ) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        e.target.reset();
        setError({
          status: true,
          msg: "Registration Successful",
          type: "success",
        });
      } else {
        setError({
          status: true,
          msg: "Confirm password does not match",
          type: "danger",
        });
      }
    } else {
      setError({
        status: true,
        msg: "All fields are required",
        type: "danger",
      });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center ">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="text-center">Register</h3>

        <form id="registration-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" name="name" className="form-control" required />
          </div>

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

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="password_confirmation"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              name="tc"
              className="form-check-input"
              id="tc"
            />
            <label className="form-check-label" name="tc">
              I agree to the Terms and Conditions
            </label>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Register
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

export default Registration;
