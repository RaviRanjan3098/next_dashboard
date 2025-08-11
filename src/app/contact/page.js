"use client"
import React, { useState } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    rollNO: "",
    moNumber: "",
  })

  const [error, setError] = useState({
    userName: "",
    email: "",
    rollNO: "",
    moNumber: "",
  })

  const validation = () => {
    const errors = {}
    if (!formData.userName?.trim()) {
      errors.userName = "Username is required";
    }

    // Email validation
    if (!formData.email?.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format.";
    }

    if (!formData.rollNO?.trim()) {
      errors.rollNO = "Roll number is required";
    }

    if (!formData.moNumber?.trim()) {
      errors.moNumber = "Mobile number is required";
    }

    setError(errors)

    return Object.keys(errors).length === 0;
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))

    let message = "";

    if (name === "email") {
      if (!value.trim()) {
        message = "Email is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        message = "Invalid email format.";
      }
    }

    setError((prev) => ({
      ...prev,
      [name]: message
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      console.log("Form submitted successfully", formData);
    }
  };

  console.log("error", error)
  return (
    <div className='m-auto'>
      <form className='m-auto'>
        <h2>form create </h2>
        <div className='row'>
          <div className='col-md-3 col-sm-6 col-12'>
            <label className="form-label" >Name</label>
            <input
              name="userName"
              className={`form-control  ${error.userName ? "is-invalid" : ""}`}
              placeholder='Enter name'
              type='text'
              value={formData.userName}
              onChange={handleChange}
            />

            {error.userName && <p className='text-danger'>{error.userName} </p>}
          </div>
          <div className='col-md-3 col-sm-6 col-12'>
            <label className="form-label">Email</label>
            <input
              name="email"
              className={`form-control  ${error.email ? "is-invalid" : ""}`}
              placeholder='Enter email'
              type='text'
              value={formData.email}
              onChange={handleChange}
            />
            {error.email && <p className='text-danger mb-0'>{error.email}</p>}
          </div>

          <div className='col-md-3 col-sm-6 col-12'>
            <label className="form-label">Roll NO</label>
            <input
              name="rollNO"
              className={`form-control  ${error.rollNO ? "is-invalid" : ""}`}
              placeholder='Enter roll number'
              type='text'
              value={formData.rollNO}
              onChange={handleChange}
            />
            {error.rollNO && <p className='text-danger'>{error.rollNO} </p>}
          </div>
          <div className='col-md-3 col-sm-6 col-12'>
            <label className="form-label" >Mobile NO</label>
            <input
              name="moNumber"
              className={`form-control  ${error.moNumber ? "is-invalid" : ""}`}
              placeholder='Enter mobile no.'
              type='number'
              value={formData.moNumber}
              onChange={handleChange}
            />
            {error.moNumber && <p className='text-danger'>{error.moNumber} </p>}
          </div>

          <div className='mt-3'>
            <button className='btn btn-primary' onClick={(e) => handleSubmit(e)}>Submit</button>
          </div>
        </div>
      </form >
    </div >
  );
}

export default Page;
