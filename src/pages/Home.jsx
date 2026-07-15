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
        <div className="min-h-screen">
            
            <div className="bg-blue-600 text-white py-20 text-center">
                <h1 className="text-5xl font-bold">Wellcome To My site</h1>
            </div>
            
            <div className="bg-gray-100 py-5">
                <h2 className="text-4xl font-bold text-center mt-10">Users List</h2>
                <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8" >

                {users.slice(0, 10).map((user, index) => ( 
                  <div key={user.id} className="bg-white shadow-lg rounded-xl p-6 d-flex">
                    <h3 className="text-xl font-bold mb-3">
                       {user.name} <small>({user.username})<br/><small>#{user.id}</small></small>
                    </h3>

                    <p className="text-gray-600">
                      Email:- {user.email}
                    </p>

                    <p className="text-gray-600">
                      Phone:- {user.phone}
                    </p>

                    <p className="text-gray-600">
                      Address:- {user.address.street}, {user.address.city}, {user.address.zipcode}
                    </p>

                    <p className="text-gray-600">
                      Company:- {user.company.name}
                    </p>

                  </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
