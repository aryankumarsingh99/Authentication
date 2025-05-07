import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log(name, email, password);

    e.preventDefault();
    if (name === "" || email === "" || password === "") {
     
      return;
    } else {
      axios
        .post("https://authentication-hpnv.onrender.com/signup", { name, email, password })
        .then((result) => {
          console.log(result);
          if (result.data.message === "success") {
            alert("Signup Success");
            navigate("/");
          } else {
            alert(result.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
       
    <div
    className="flex  items-center justify-center min-h-screen bg-cover bg-center"
    style={{
      backgroundImage: "url('https://plus.unsplash.com/premium_photo-1667754184973-b36396448a0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwNXx8fGVufDB8fHx8fA%3D%3D')",
      backgroundSize: "cover",
      backgroundPosition: "center center", 
    }}
    >
           
          <div className="bg-gray-100 pl-20 w-150  rounded-2xl shadow-lg">
            <h2 className="font-bold text-2xl text-gray-800 py-8 ">
              SignUp
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4 ">
                <label className="block text-gray-700">Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                 
                  className="w-90 px-3 py-2 border rounded"
                  placeholder="Enter your username"
                  
                />
              </div>
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
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="w-90 px-3 py-2 border rounded"
                  placeholder="********"
                  required
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className=" w-90 bg-teal-600  py-2 text-white rounded font-bold hover:bg-blue-600"
                >
                  Signup
                </button>
                <p className="  pt-10">
                  Already have an account?
                  <Link to="/" className="text-red-600">
                    LogIn
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
    
    
  );
}

export default SignUp;
