import React, { useState } from "react";

function LoginPage({ loginDetails }) {
  const [formDetails, setFormDetails] = useState({
    username: "",
    password: "",
    email: "",
    remember: false,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (formDetails.username !== "admin" || formDetails.password !== "password") {
      setError("Invalid username or password.");
      return false;
    }
    setError("");
    return true;
  };

  const onLogin = () => {
    if (validateForm()) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        loginDetails();
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <form
          className="flex flex-col gap-6"
          onSubmit={(event) => {
            event.preventDefault();
            onLogin();
          }}
        >
          <div className="text-center text-xl font-bold text-gray-900">
            <h1>Create Account</h1>
            <span className="block text-gray-600 text-sm">Use email for registration</span>
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Name"
            value={formDetails.username}
            onChange={(event) => {
              setFormDetails((prev) => ({
                ...prev,
                username: event.target.value,
              }));
            }}
          />
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Email"
            value={formDetails.email}
            onChange={(event) => {
              setFormDetails((prev) => ({
                ...prev,
                email: event.target.value,
              }));
            }}
          />
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Password"
            value={formDetails.password}
            onChange={(event) => {
              setFormDetails((prev) => ({
                ...prev,
                password: event.target.value,
              }));
            }}
          />
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formDetails.remember}
              onChange={(event) => {
                setFormDetails((prev) => ({
                  ...prev,
                  remember: event.target.checked,
                }));
              }}
              className="form-checkbox text-teal-500"
            />
            <label className="text-gray-700">Remember me</label>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-200"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
