import React, {useEffect,useState} from "react";

function Home() {
    const [users, setUsers] = useState([]);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {

    fetch("http://localhost:3001/users")
//    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            setUsers(data);
        })
        .catch((error) => {
            console.log("Users Error:", error);
        });

    }, []);
    


    return ( 
<div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white">
  <div className="bg-blue-600 dark:bg-blue-800 text-white py-20 text-center">
    <h1 className="text-5xl font-bold">Welcome To My Site</h1>
  </div>
  <div className="py-5">
    <h2 className="text-4xl font-bold text-center mt-10">
      Users List
    </h2>

    <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8">
      {users.slice(0, 10).map((user) => (
        <div
          key={user.id}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white mb-0">
             <span>#{user.id}</span> {user.name}{" "}
            <small className="text-gray-500 dark:text-gray-400">
              ({user.username})             
            </small>
          </h3>

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Email:</strong> {user.email}
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Phone:</strong> {user.phone}
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Address:</strong> {user.address.street},{" "}
            {user.address.city}, {user.address.zipcode}
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            <strong>Company:</strong> {user.company.name}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>
    );
}

export default Home;
