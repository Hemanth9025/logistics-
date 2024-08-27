// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../Context/AuthContext';
// import './Profile.css';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
// import axios from 'axios';

// const Profile = () => {
//     const { userId } = useAuth();
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (userId) {
//             axios.get(`http://localhost:3001/users/${userId}`)
//                 .then(response => {
//                     setUser(response.data);
//                     setLoading(false);
//                 })
//                 .catch(error => {
//                     console.error("Error fetching user data:", error);
//                     setLoading(false);
//                 });
//         } else {
//             setLoading(false);
//         }
//     }, [userId]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (!user) {
//         return <div>No user data available.</div>;
//     }

//     return (
//         <div className='profile'>
//             <Navbar />
//             <div className="profile-container">
//                 <h1>Profile Page</h1>
//                 <div className="profile-details">
//                     <p><strong>Name:</strong> {user.name}</p>
//                     <p><strong>Email:</strong> {user.email}</p>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default Profile;

import React from 'react';
import './Profile.css';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Profile = () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!loggedInUser) {
        return <p>No user logged in.</p>;
    }

    return (
        <div className="profile">
            <Navbar/>
            <div className='profile-container'>
                <h1>User Profile</h1>
                <p><strong>Username:</strong> {loggedInUser.name}</p>
                <p><strong>Email:</strong> {loggedInUser.email}</p>
                <p><strong>Role:</strong> {loggedInUser.role}</p>
            </div>
            <Footer/>
        </div>
    );
};

export default Profile;
