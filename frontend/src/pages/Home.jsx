import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const navigate=useNavigate();
    const token = localStorage.getItem("token"); // Retrieve token

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!token) {
                    throw new Error("No token found, please log in.");
                }

                const response = await fetch("http://localhost:5000/protected/home", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }

                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
                console.error("Fetch error:", err);
            }
        };

        fetchData();
    }, [token]); // Runs when component mounts
    const logoutHandler=()=>{
      navigate('/');
      localStorage.removeItem('token');
    }

    return (
      <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="text-gray-600 mb-6">Click below to navigate:</p>
      <div className="flex space-x-4">
          <button 
              onClick={() => navigate("/about")} 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
              About Page
          </button>
          <button 
              onClick={() => navigate("/dashboard")} 
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
              Dashboard
          </button>
          <button 
              onClick={() => navigate("/admin_panel")} 
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
              Admin Panel
          </button>
          <button onClick={logoutHandler} className="bg-red-500 text-white px-4 rounded -lg">
            LogOut
          </button>
      </div>
  </div>
);
};

export default Home;
