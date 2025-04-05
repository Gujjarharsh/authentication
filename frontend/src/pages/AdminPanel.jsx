import React, { useEffect, useState } from 'react'

function AdminPanel() {
    const [message,setMessage]=useState('');
    const token=localStorage.getItem('token')
    useEffect(()=>{
    const fetchData=async()=>{
        try {
            if(!token){
              setMessage("Invalid Token OR Expired Token")  
            }else{
                const response=await fetch('http://localhost:5000/protected/admin_panel',{
                    method:"GET",
                    headers:{
                        "authorization":`Bearer ${token}`,
                        "content-type":"application/json"
                    }
                });
                const result=await response.json();
                if(response.ok){
                    setMessage(result.message)
                }else{
                    setMessage(result.error)
                }
            }
        } catch (error) {
            setMessage("Error to connecting Server")
        }
    }
    fetchData();
    },[token])
    

  return (
    <div>
      {message && <p className="mt-4  text-4xl  font-bold text-center text-red-800">{message}</p>}
    </div>
  )
}

export default AdminPanel
