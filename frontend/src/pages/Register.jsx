import { useState } from "react";
import { Await, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user_name, setName] = useState("");
  const [role_id] = useState(1);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setEmail("");
    setPassword("");
    setName("");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    // Simulating a backend request (Replace with actual API call)
    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "Post",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({ user_name, email, password, role_id }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("register successfully");
        setMessage("register successfully");
        setTimeout(() => navigate("/login"), 1000); // Redirect to Home after 1 sec
      } else {
        toast.error(data.message);
        setMessage(data.message);
      }
    } catch (error) {}
    toast.error(data.message);
    setMessage(error);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">Name</label>
              <input
              type="text"
              className="w-full px-4 py-2 mt-2 border rounded-lg"
              placeholder="Enter your name.."
              value={user_name}
              onChange={(e)=> setName(e.target.value)}
              required
              />
            
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-lg"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
          >
            Sign Up
          </button>
          <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-500 hover:underline"
          >
            Log in
          </button>
        </p>
        </form>
        {message && <p className="mt-4 text-center text-gray-600">{message}</p>}
      </div>
    </div>
  );
}
