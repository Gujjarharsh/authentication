import React, { useEffect, useState } from "react";


function Dashboard() {
 
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const response = await fetch(
            "http://localhost:5000/protected/dashboard",
            {
              method: "GET",
              headers: {
                authorization: `Bearer ${token}`,
                "content-typr": "application/json",
              },
            }
          );
          const data = await response.json();
          if (response.ok) {
            setMessage(data.message);
          } else {
            setMessage(data.error);
          }
        }
      } catch (error) {
        setMessage("Error connecting to server");
      }
    };
    fetchData();
  }, [token]);

  return (
    <div>
      {message && <p className="mt-4  text-4xl  font-bold text-center text-red-800">{message}</p>}
    </div>
  );
}

export default Dashboard;
