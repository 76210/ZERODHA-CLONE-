import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔴 SIRF yahan e add kiya + route sahi
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3002/api/auth/login",
        formData
      );

      localStorage.setItem("token", res.data.token);

      alert(res.data.message); 
      /// window.location.href = "http://localhost:3000/dashboard";  
     window.location.href = "http://localhost:3001/dashboard"; 
      //navigate("/dashboard"); // ✅ AB ROUTE EXIST KARTA HAI
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };
return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>Login</h2>
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
        onClick={handleLogin}
        style={{ padding: "10px 20px", marginTop: "20px", cursor: "pointer" }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;  

