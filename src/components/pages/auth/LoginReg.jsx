import { useState } from "react";
import UserLogin from "./UserLogin";
import Registration from "./Registration";

function LoginReg() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100 bg-light">
    <div className="row w-100 justify-content-center">
      <div className="col-lg-5 col-md-8 col-sm-10 d-flex align-items-center justify-content-center">
        <div className="card p-4 w-100 shadow-lg" style={{ maxWidth: "500px" }}>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "login" ? "active" : ""}`}
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "register" ? "active" : ""}`}
                onClick={() => setActiveTab("register")}
              >
                Registration
              </button>
            </li>
          </ul>

          {/* Tab Content */}
          <div className="tab-content mt-3">
            {activeTab === "login" && <UserLogin />}
            {activeTab === "register" && <Registration />}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default LoginReg;
