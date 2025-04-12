import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          alert("LogIn Success");
          navigate("/home");
        } else {
          alert(result.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
    className="flex items-center justify-center min-h-screen bg-cover bg-center"
    style={{
      backgroundImage: "url('https://plus.unsplash.com/premium_photo-1667754184973-b36396448a0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwNXx8fGVufDB8fHx8fA%3D%3D')",
    }}
    >
          <div className="bg-gray-100 pl-20 w-150 rounded-2xl shadow-lg">
            <h2 className="font-bold text-2xl text-gray-800 py-8">
              LogIn
            </h2>
            
            <form onSubmit={handleSubmit}>
              
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="w-90 px-3 py-2 border rounded"
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  onChange={(e) => setpassword(e.target.value)}
                  type="password"
                  className="w-90 px-3 py-2 border rounded"
                  placeholder="*****"
                  required
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className=" w-90 bg-teal-600  py-2 text-white rounded font-bold hover:bg-blue-600"
                >
                  LogIn
                </button>
                <p className="  pt-10">
                  Already have an account?
                  <Link to="/signup" className="text-red-600">
                    SignUp
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
  );
}

export default Login;
