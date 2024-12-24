import React,{useEffect, useState} from 'react'
import FormComponent from './form'
import Table from './table'



const Body = () => {

  const [userData,setUserData]=useState([])
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("users")))
  },[userData]);

  return (  
    <div>
    <FormComponent userData={userData} />
    <Table/>
    </div>
  )
}

export default Body
