import React from 'react';

const page = () => {
  return (
    <div>
      this is about us page


      <div className="mb-5">
        <label htmlFor="fullName" className="block mb-1 text-sm font-medium">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Enter your full name"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        // value={formData.fullName}
        // onChange={handleChange}
        // onBlur={handleBlur}
        />
      </div>
    </div>
  );
}

export default page;




