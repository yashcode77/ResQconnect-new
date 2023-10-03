import React, { useState } from "react";
import { LoginAPI } from "../api/AuthAPI";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function LoginComponent() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({});
  
  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      toast.success("Signed In to resQconnect!");
      localStorage.setItem("userEmail", res.user.email);
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error("Please Check your Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-3xl font-semibold mb-4">Login</h1>
        <p className="text-gray-600 mb-6">Uniting Heroes for Swift Disaster Response and Coordination.</p>

        <div className="space-y-4">
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type="email"
            className="w-full px-4 py-2 border rounded"
            placeholder="Email or Phone"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type="password"
            className="w-full px-4 py-2 border rounded"
            placeholder="Password"
          />
        </div>
        <button onClick={login} className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Login
        </button>
      </div>
      <hr className="my-8 w-16 border-t border-gray-300" />
      <div className="text-center">
        <p className="text-gray-600">
          New to resQconnect?{" "}
          <span className="text-blue-500 cursor-pointer" onClick={() => navigate("/signup")}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
