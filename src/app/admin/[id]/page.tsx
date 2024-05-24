// import React from 'react'
"use client"


const page = ({params}:{params:{id:string}}) =>{
  return (
    <div className="gray">
        <p>{params.id}</p>
        </div>
  )
}

export default page