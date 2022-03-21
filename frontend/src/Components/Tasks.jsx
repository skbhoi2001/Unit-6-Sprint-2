import React, { useEffect, useState } from 'react'

export const Tasks = () => {
    const [data,setData]= useState([])
    useEffect(()=>{
        fetch("http://localhost:8000/tasks")
        .then((r)=>r.json())
        .then((r)=>setData(r))
    },[])
  return (
    <div>
        <h1>Task PAge</h1>
        {
            data.map((item)=>{
                return(
                    <div key={item._id} style={{display:"flex",gap:"30px"}} >
                        <h3>{item.title}</h3>
                        <p>{`${item.status}`}</p>
                    </div>
                )
            })
        }
    </div>
  )
}
