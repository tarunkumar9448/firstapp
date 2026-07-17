import { useEffect, useState } from "react";

function Managedata() {

  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const getUsers = () => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log("Users Error:", error);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleEdit = (user) => {

    setEditUser(user);
    setShowModal(true);

  };

  const handleChange = (e) => {

    const { name, value } = e.target;


    setEditUser((prev) => ({
      ...prev,
      [name]: value
    }));

  };

  const handleUpdate = async () => {


    await fetch(
      `http://localhost:3001/users/${editUser.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editUser),
      }
    );


    alert("User Updated Successfully");


    setShowModal(false);

    getUsers();

  };
    
  const handleDelete = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this user?"
  );

  if (!confirmDelete) {
    return;
  }


  try {

    const response = await fetch(
      `http://localhost:3001/users/${id}`,
      {
        method: "DELETE",
      }
    );


    if (!response.ok) {
      throw new Error("Delete failed");
    }


    alert("User Deleted Successfully");

    getUsers();


  } catch (error) {

    console.log("Delete Error:", error);

  }

};

  return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-700">
      <h1 className="text-4xl font-bold mb-6 text-center bg-blue-600 text-white py-20 text-center">
        Manage Data
      </h1>
    <div className="max-w-5xl mx-auto py-16 px-6">
      <div className="overflow-x-auto">
        <table className="min-w-full border shadow-lg bg-white dark:bg-gray-600 dark:border-gray-600">
          <thead className="bg-blue-600 text-white dark:bg-gray-500 dark:text-gray-100">
            <tr>
              <th className="px-4 py-3 text-center">ID</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3  text-center">Action</th>
            </tr>
          </thead>
          <tbody>
          {users.map((user)=>(
              <tr key={user.id} className="border-b dark:border-gray-200 odd:bg-white even:bg-gray-100 dark:odd:bg-gray-200 dark:even:bg-gray-300">
                <td className="px-4 py-3 text-center">
                  {user.id}
                </td>
                <td className="px-4 py-3">
                  {user.name}
                </td>
                <td className="px-4 py-3">
                  {user.email}
                </td>
                <td className="px-4 py-3 text-center">
                  <button onClick={()=>handleEdit(user)} className="bg-yellow-500 text-white px-3 py-1 rounded mr-3">Edit</button>
                  <button onClick={() => handleDelete(user.id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))
          }

          </tbody>
        </table>
      </div>
      </div>


      {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white rounded-xl p-8 w-full max-w-lg">
              <h2 className="text-2xl font-bold mb-5">
                Edit User
              </h2>
              <input
                type="text"
                name="name"
                value={editUser.name}
                onChange={handleChange}
                className="border p-3 w-full rounded mb-3"
                placeholder="Name"
              />
              <input
                type="text"
                name="username"
                value={editUser.username || ""}
                onChange={handleChange}
                className="border p-3 w-full rounded mb-3"
                placeholder="Username"
              />
              <input
                type="email"
                name="email"
                value={editUser.email}
                onChange={handleChange}
                className="border p-3 w-full rounded mb-3"
                placeholder="Email"
              />
              <input
                type="text"
                name="phone"
                value={editUser.phone || ""}
                onChange={handleChange}
                className="border p-3 w-full rounded mb-3"
                placeholder="Phone"
              />
              <input
                type="text"
                name="website"
                value={editUser.website || ""}
                onChange={handleChange}
                className="border p-3 w-full rounded mb-3"
                placeholder="Website"
              />
              <div className="flex gap-3 mt-5">
                <button onClick={handleUpdate} className="bg-blue-600 text-white px-5 py-2 rounded">Update</button>
                <button onClick={()=>setShowModal(false)} className="bg-gray-500 text-white px-5 py-2 rounded">Cancel</button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}


export default Managedata;