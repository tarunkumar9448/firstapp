import { useState } from "react";




function AddData() {
  const [user, setUser] = useState({
      name: "",
      username: "",
      email: "",
      address: {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
          geo: {
              lat: "",
              lng: "",
          },
      },
      phone: "",
      website: "",
      company: {
          name: "",
          catchPhrase: "",
          bs: "",
      },
  });
    
 const [errors, setErrors] = useState({});

  const handleChange = (e) => {
      const {
          name,
          value
      } = e.target;

      if (name.includes(".")) {
          const keys = name.split(".");

          if (keys.length === 2) {
              setUser((prev) => ({
                  ...prev,
          [keys[0]]: {
                      ...prev[keys[0]],
            [keys[1]]: value,
                  },
              }));
          }

          if (keys.length === 3) {
              setUser((prev) => ({
                  ...prev,
          [keys[0]]: {
                      ...prev[keys[0]],
            [keys[1]]: {
                          ...prev[keys[0]][keys[1]],
              [keys[2]]: value,
                      },
                  },
              }));
          }
      } else {
          setUser((prev) => ({
              ...prev,
        [name]: value,
          }));
      }
  };


  const handleSubmit = async (e) => {
      e.preventDefault();
      

      if (!validate()) return;
      
      const newId = await getLastId();
     

      const newUser = {
          ...user,
          id: newId, 
      };

      const res = await fetch("http://localhost:3001/users", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
      });

      const data = await res.json();
      console.log(data);

      alert("User Added Successfully");

      // optional refresh
      // window.location.href = "/";
       window.location.href = "/adddata";
  };

  const getLastId = async () => {
      const res = await fetch("http://localhost:3001/users");
      const data = await res.json();

      if (data.length === 0) return 1;

      return data[data.length - 1].id + 1;
  };
    
    
  const validate = () => {
  let newErrors = {};

  if (!user.name) newErrors.name = "Name required";
  if (!user.username) newErrors.username = "Username required";
  if (!user.email) newErrors.email = "Email required";
  if (!user.phone) newErrors.phone = "Phone required";
  if (!user.website) newErrors.website = "Website required";
  if (!user.address.street) newErrors.street = "Street required";
  if (!user.address.city) newErrors.city = "City required";
  if (!user.address.zipcode) newErrors.zipcode = "Zipcode required";
  if (!user.company.name) newErrors.company = "Company name required";

  setErrors(newErrors);

  const isValid = Object.keys(newErrors).length === 0;

  if (!isValid) {
    alert("All fields are required");
  }

  return isValid;
};
  return (
  <div className="max-w-5xl mx-auto py-12 px-6">
    <h1 className="text-4xl font-bold text-center mb-8">
      Add User
    </h1>

    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-8 space-y-6"
    >
      {/* Profile Image */}
      {/*<div>
        Profile Image  <label className="block mb-2 font-semibold">
          Profile Image
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="w-full border p-3 rounded-lg"
        />

        {user.image && (
          <img
            src={user.image}
            alt="Preview"
            className="w-28 h-28 rounded-full mt-4 object-cover border"
          />
        )}
      </div>*/}

      {/* Basic Details */}
      <div className="grid md:grid-cols-3 gap-4">

        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          name="username"
          placeholder="Username *"
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Email *"
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

      </div>

      {/* Address */}
      <h2 className="text-xl font-semibold border-b pb-2">
        Address
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        <input
          type="text"
          name="address.street"
          placeholder="Street *"
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          name="address.suite"
          placeholder="Suite"
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          name="address.city"
          placeholder="City *"
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          name="address.zipcode"
          placeholder="Zip Code *"
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          name="address.geo.lat"
          placeholder="Latitude"
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          name="address.geo.lng"
          placeholder="Longitude"
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

      </div>

      {/* Contact */}
      <h2 className="text-xl font-semibold border-b pb-2">
        Contact
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          type="text"
          name="phone"
          placeholder="Phone Number *"
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          name="website"
          placeholder="Website *"
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

      </div>

      {/* Company */}
      <h2 className="text-xl font-semibold border-b pb-2">
        Company Details
      </h2>

      <div className="grid md:grid-cols-3 gap-5">

        <input
          type="text"
          name="company.name"
          placeholder="Company Name *"
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          name="company.catchPhrase"
          placeholder="Catch Phrase"
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          name="company.bs"
          placeholder="Business"
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white py-3 px-5 rounded-lg hover:bg-blue-700 transition"
      >
        Add User
      </button>
    </form>
  </div>
);
}

export default AddData;