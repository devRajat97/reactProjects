import React, { useState } from "react";

const FormComponent = () => {
  const [formData, setFromData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [data,setData] = useState([])

  const onChangeInput = (e) => {
    setFromData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const updateData = [...data,formData]
    setData(updateData)
    localStorage.setItem("users", JSON.stringify(updateData));
    setFromData({
      fristName: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div>
      <h1>from</h1>
      <form onSubmit={handleAddUser}>
        <input
          type="name"
          placeholder="First Name"
          name="fristName"
          onChange={(e) => onChangeInput(e)}
          value={formData?.fristName}
          required
        />
        <input
          type="name"
          placeholder="Last Name"
          name="lastName"
          onChange={(e) => onChangeInput(e)}
          value={formData?.lastName}
          required
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={(e) => onChangeInput(e)}
          value={formData?.email}
          required
        />
        <input
          type="phone"
          placeholder="Phone"
          name="phone"
          onChange={(e) => onChangeInput(e)}
          value={formData?.phone}
          required
        />
        <button type={"submit"}>Add User</button>
      </form>
    </div>
  );
};

export default FormComponent;
