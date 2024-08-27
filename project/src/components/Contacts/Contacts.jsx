// import React from 'react';
// import './../assets/css/Contacts.css';
// import Navbar from './Navbar';
// import Footer from './Footer';

// const Contacts = () => {
//   return (
//     <div className="home-container">
//       <Navbar/>
//       <div className="hero-section">
//         <h1>CONTACT US</h1>
//       </div>
               
//       <div className="contact-container">
//         <div className="contact-form">
//           <form>
//             <div className="form-group">
//               <label>First Name</label>
//               <input type="text" name="firstName" />
//             </div>
//             <div className="form-group">
//               <label>Last Name</label>
//               <input type="text" name="lastName" />
//             </div>
//             <div className="form-group">
//               <label>Email</label>
//               <input type="email" name="email" />
//             </div>
//             <div className="form-group">
//               <label>Subject</label>
//               <input type="text" name="subject" />
//             </div>
//             <div className="form-group">
//               <label>Message</label>
//               <textarea name="message"></textarea>
//             </div>
//             <button type="submit">Send Message</button>
//           </form>
//         </div>
//         <div className="contact-info">
//           <div className="info-item">
//             <h3>Address</h3>
//             <p>193, Admin Street, Valayapati, Namakkal</p>
//           </div>
//           <div className="info-item">
//             <h3>Phone</h3>
//             <p>+91 23676 35471</p>
//           </div>
//           <div className="info-item">
//             <h3>Email Address</h3>
//             <p>trackpro@gmail.com</p>
//           </div>
//           <div className="info-item">
//             <h3>Looking For Something In Particular?</h3>
//             <p>
//             We are here to help you with all of your queries related to Focus Softnet products. Get support by Call,
//              Chat, Email or submit your feedback/complaints regarding our products and services to our experts for 
//              instant support.
//             </p>
//             {/* <button>Learn More</button> */}
//           </div>
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default Contacts;


// import React, { useState } from 'react';
// import './../assets/css/Contacts.css';
// import Navbar from './Navbar';
// import Footer from './Footer';

// const Contacts = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem('contactFormData', JSON.stringify(formData));
//     alert('Message sent and stored in local storage!');
//     // Clear the form after submission
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       subject: '',
//       message: '',
//     });
//   };

//   return (
//     <div className="home-container">
//       <Navbar />
//       <div className="hero-section">
//         <h1>CONTACT US</h1>
//       </div>

//       <div className="contact-container">
//         <div className="contact-form">
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label>First Name</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-group">
//               <label>Last Name</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-group">
//               <label>Subject</label>
//               <input
//                 type="text"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-group">
//               <label>Message</label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//               ></textarea>
//             </div>
//             <button type="submit">Send Message</button>
//           </form>
//         </div>
//         <div className="contact-info">
//           <div className="info-item">
//             <h3>Address</h3>
//             <p>193, Admin Street, Valayapati, Namakkal</p>
//           </div>
//           <div className="info-item">
//             <h3>Phone</h3>
//             <p>+91 23676 35471</p>
//           </div>
//           <div className="info-item">
//             <h3>Email Address</h3>
//             <p>trackpro@gmail.com</p>
//           </div>
//           <div className="info-item">
//             <h3>Looking For Something In Particular?</h3>
//             <p>
//               We are here to help you with all of your queries related to Focus Softnet products. Get support by Call,
//               Chat, Email or submit your feedback/complaints regarding our products and services to our experts for 
//               instant support.
//             </p>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Contacts;

// src/components/Contacts.js

import React from 'react';
import './Contacts.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ContactForm from './Contactform'; 

const Contacts = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="hero-section">
        <h1>CONTACT US</h1>
      </div>

      <div className="contact-container">
        <ContactForm /> {/* Use the ContactForm component */}
        <div className="contact-info">
          <div className="info-item">
            <h3>Address</h3>
            <p>193, Admin Street, Valayapati, Namakkal</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>+91 23676 35471</p>
          </div>
          <div className="info-item">
            <h3>Email Address</h3>
            <p>trackpro@gmail.com</p>
          </div>
          <div className="info-item">
            <h3>Looking For Something In Particular?</h3>
            <p>
              We are here to help you with all of your queries related to Focus Softnet products. Get support by Call,
              Chat, Email or submit your feedback/complaints regarding our products and services to our experts for 
              instant support.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;                                             
   

