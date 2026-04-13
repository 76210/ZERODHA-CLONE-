
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async () => {
    try {
      const res = await axios.post(
        //"http://localhost:3002/api/signup",
         "http://localhost:3002/api/auth/signup", 
        formData
      );

     alert(res.data.message); 
      navigate("/login"); // signup ke baad login page
    } 
    catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
   

  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>Signup</h2> 

       <input
        type="name"
        name="name"
        placeholder="username" 
        value={formData.name}
        onChange={handleChange}
        style={{ display: "block", margin: "10px auto", width: "100%", padding: "10px" }}
      />  

       <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        style={{ display: "block", margin: "10px auto", width: "100%", padding: "10px" }}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        style={{ display: "block", margin: "10px auto", width: "100%", padding: "10px" }}
      />
      <button
        onClick={handleSignup}
        style={{ padding: "10px 20px", marginTop: "20px", cursor: "pointer" }}
      >
        signup 
      </button>
    </div>
  );
};

export default Signup;
