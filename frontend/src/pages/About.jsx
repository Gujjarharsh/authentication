import React, { useEffect, useState } from "react";

function About() {
 const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const response = await fetch(
            "http://localhost:5000/protected/about",
            {
              method: "GET",
              headers: {
                "authorization": `Bearer ${token}`,
                "content-type": "application/json",
              },
            }
          );
          const result = await response.json();
          if (!response.ok) {
            throw new Error(
              `Error: ${response.status} - ${response.statusText}`
            );
          }

          setMessage(result.message);
        }
      } catch (error) {
        setMessage("Error to connecting server");
      }
    };
    fetchData();
  }, [token]);
  return (
    <div>
      {message && (
        <p className="mt-4  text-4xl  font-bold text-center text-red-800">
          {message}
        </p>
      )}
    </div>
  );
}

export default About;
