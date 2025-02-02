import { useState } from "react";
import Pic1 from "../../../images/pic1.png";
import UserLogin from "./UserLogin";
import Registration from "./Registration";

function LoginReg() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="container-fluid d-flex align-items-center min-vh-100">
      <div className="row w-100">
        {/* Left Side Image */}
        <div className="col-lg-7 d-none d-lg-block">
          <div
            style={{
              backgroundImage: `url(${Pic1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh", // Full screen height
              minHeight: "500px", // Minimum height fix
            }}
          ></div>
        </div>

        <div className="col-lg-5 col-12 d-flex align-items-center justify-content-center">
          <div className="p-4 w-100" style={{ maxWidth: "500px" }}>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "login" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("login")}
                >
                  Login
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "register" ? "active" : ""
                  }`}
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
