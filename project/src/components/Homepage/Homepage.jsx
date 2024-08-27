// import React from 'react';
// import '../assets/css/Homepage.css';
// import historyImage from '../assets/images/history.jpg'; 
// import storageImage from '../assets/images/storage.jpg';
// import airTransportImage from '../assets/images/air_transport.jpg';
// import cargoTransportImage from '../assets/images/cargo_transport.jpg';
// import cargoShipImage from '../assets/images/cargo_ship.jpg';
// import warehouseImage from '../assets/images/history.jpg';
// import { Link } from 'react-router-dom';
// import Navbar from './Navbar';
// import Footer from './Footer';


// const Homepage = () => {
//   return (
//     <div className="home-container">
//       <Navbar/>
//       <div className="hero-section">
//         <h1>WORLDWIDE FREIGHT SERVICES</h1>
//         <button className="cta-button">Get Started!</button>
//       </div>
//       <div className="quote-section">
//       <div className="quote-item">
//         <div className="quote-icon ">₹</div>
//         <h3>BEST PRICES</h3>
//         <p>We offer competitive pricing tailored to your needs, ensuring cost-effective solutions without 
//           compromising quality. Experience transparency and value as we optimize your supply chain for maximum 
//           efficiency.</p>
//       </div>
//       <div className="quote-form">
//         <h3>GET FREE QUOTE</h3>
//         <form>
//           <input type="text" placeholder="Enter Name" />
//           <input type="email" placeholder="Enter Email" />
//           <button type="submit">GET QUOTE</button>
//         </form>
//       </div>
//       <div className="quote-item">
//         <div className="quote-icon">📞</div>
//         <h3>24/7 SUPPORT</h3>
//         <p>Our dedicated team is available around the clock to assist with any inquiries or issues, ensuring a 
//           seamless logistics experience.</p>
//       </div>
//     </div>
//       <div className="content-section">
//         <div className="history-container">
//           <div className="history-content">
//             <h2>ABOUT US</h2>
//             <p>
//             Mission <br />
//               To provide efficient, reliable, and innovative logistics solutions that optimize the supply chain, 
//               enhance customer satisfaction, and drive business growth through cutting-edge technology and exceptional 
//               service.
//             </p>
//             <Link to='/Aboutus'>
//             <p>Learn more</p>
//             </Link>
//           </div>
//           <div className="history-image">
//           <img src={historyImage} alt="History" /> 
//           </div>
//         </div>
//       </div>
//         <div className="services-section">
//           <h2>OUR SERVICES</h2>
//           <div className="services-container">
//             <div className="service-item" style={{ backgroundImage: `url(${storageImage})` }}>
//               <div className="service-content">
//                 <h3>Storage</h3>
//               </div>
//             </div>
//             <div className="service-item" style={{ backgroundImage: `url(${airTransportImage})` }}>
//               <div className="service-content">
//                 <h3>Air Transports</h3>
//               </div>
//             </div>
//             <div className="service-item" style={{ backgroundImage: `url(${cargoTransportImage})` }}>
//               <div className="service-content">
//                 <h3>Cargo Transports</h3>
//               </div>
//             </div>
//             <div className="service-item" style={{ backgroundImage: `url(${warehouseImage})` }}>
//             <div className="service-content">
//               <h3>Warehouse</h3>
//             </div>
//             </div>
//             <div className="service-item" style={{ backgroundImage: `url(${cargoShipImage})` }}>
//               <div className="service-content">
//                 <h3>Cargo Ship</h3>
//               </div>
//             </div>
//           </div>
//         </div>
      
//       <section className="more-services-section">
//                 <h2>MORE SERVICES</h2>
//                 <p>We Offer The Following Services</p>
//                 <div className="more-services-container">
//                     <div className="more-service-item">
//                         <div className="more-service-icon">✈️</div>
//                         <h3>Air Freight</h3>
//                         <p>Our Air Freight service ensures fast and reliable global delivery, leveraging an extensive network of airlines 
//                           to meet urgent shipping needs. We provide comprehensive tracking and streamlined customs clearance to guarantee 
//                           timely arrivals and exceptional service quality.</p>
//                         <a href="#learn-more" className="learn-more">Learn More</a>
//                     </div>
//                     <div className="more-service-item">
//                         <div className="more-service-icon">🚢</div>
//                         <h3>Ocean Freight</h3>
//                         <p>Ocean freight services in a logistics management system facilitate the transportation of goods via shipping 
//                           vessels, offering cost-effective and efficient solutions for international trade. By managing bookings, tracking 
//                           shipments, and optimizing routes, these services ensure timely delivery while adhering to regulatory compliance 
//                           and environmental standards.</p>
//                         <a href="#learn-more" className="learn-more">Learn More</a>
//                     </div>
//                     <div className="more-service-item">
//                         <div className="more-service-icon">🚚</div>
//                         <h3>Ground Shipping</h3>
//                         <p>Ground shipping service in a logistics management system provides reliable and cost-effective transportation of 
//                           goods using road networks. It offers flexibility in delivery options, catering to various timelines and customer 
//                           needs while ensuring the safe handling of packages.</p>
//                         <a href="#learn-more" className="learn-more">Learn More</a>
//                     </div>
//                     <div className="more-service-item">
//                         <div className="more-service-icon">🏢</div>
//                         <h3>Warehousing</h3>
//                         <p>Warehousing services in a logistics management system involve the efficient storage, inventory management, and 
//                           handling of goods to ensure timely availability for order fulfillment. These services optimize space utilization, 
//                           reduce costs, and enhance supply chain efficiency through real-time inventory tracking and streamlined operations.</p>
//                         <a href="#learn-more" className="learn-more">Learn More</a>
//                     </div>
//                     <div className="more-service-item">
//                         <div className="more-service-icon">📦</div>
//                         <h3>Storage</h3>
//                         <p>Storage in a logistics management system involves efficiently managing inventory within warehouses, ensuring 
//                           optimal space utilization, and facilitating easy access to products. It includes real-time tracking of stock 
//                           levels, automated replenishment processes, and organization of goods for quick retrieval during order fulfillment.</p>
//                         <a href="#learn-more" className="learn-more">Learn More</a>
//                     </div>
//                     <div className="more-service-item">
//                         <div className="more-service-icon">🚛</div>
//                         <h3>Delivery Van</h3>
//                         <p>A delivery van in a logistics management system serves as a crucial vehicle for transporting goods from 
//                           warehouses to customers, ensuring timely and efficient deliveries. Equipped with tracking technology, the 
//                           van enables real-time monitoring of shipment status and location, enhancing transparency and customer 
//                           satisfaction.</p>
//                         <a href="#learn-more" className="learn-more">Learn More</a>
//                     </div>
//                 </div>
//             </section>
//             <Footer/>
//     </div>
//   );
// };

// export default Homepage;

import React from 'react';
import './Homepage.css';
import historyImage from '../images/history.jpg'; 
import airTransportImage from '../images/air_transport.jpg';
import cargoTransportImage from '../images/cargo_transport.jpg';
import cargoShipImage from '../images/cargo_ship.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { HashLink } from 'react-router-hash-link';
import PartnersSection from '../PatnersSection/PartnersSection';


const Homepage = () => {
  const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        navigate('/GetQ'); // Navigate to the GetQ page
    };
  return (
    <div className="home-container">
      <Navbar/>
      <div className="hero-section">
        <h1>WORLDWIDE FREIGHT SERVICES</h1>
        <HashLink to="/HomePage#quote-section"><button className="cta-button">Get Started!</button></HashLink>
        
      </div>
      <div className="quote-section" id='quote-section'>
        <div className="quote-item">
          <div className="quote-icon ">₹</div>
          <h3>BEST PRICES</h3>
          <p>We offer competitive pricing tailored to your needs, ensuring cost-effective solutions without 
            compromising quality. Experience transparency and value as we optimize your supply chain for maximum 
            efficiency.</p>
        </div>
        <div className="quote-form">
          <h3>GET FREE QUOTE</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Name" required/>
            <input type="email" id='email' placeholder="Enter Email" required/>
            <input type="text" placeholder="Required Service" required/>
            <button type="submit">GET QUOTE</button>
          </form>
        </div>
        <div className="quote-item">
          <div className="quote-icon">📞</div>
          <h3>24/7 SUPPORT</h3>
          <p>Our dedicated team is available around the clock to assist with any inquiries or issues, ensuring a 
            seamless logistics experience.</p>
        </div>
      </div>
      <div className="content-section">
        <div className="history-container">
          <div className="history-content">
            <h2>ABOUT US</h2>
            <p>
            Mission <br />
               To provide efficient, reliable, and innovative logistics solutions that optimize the supply chain, 
               enhance customer satisfaction, and drive business growth through cutting-edge technology and exceptional 
               service.
            </p>
            <Link to='/Aboutus'>
            <p>Learn more</p>
            </Link>
          </div>
          <div className="history-image">
          <img src={historyImage} alt="History" /> 
          </div>
        </div>
      </div>
      <hr></hr>
        <div className="services-section" id='services-section'>
          <h2>OUR SERVICES</h2>
          <div className="services-container">
            <div className="service-item" style={{ backgroundImage: `url(${airTransportImage})` }}>
              <div className="service-content">
              <h3><a href="/AirServices" className="no-underline-link">AIR SERVICES</a></h3>

              </div>
            </div>
            <div className="service-item" style={{ backgroundImage: `url(${cargoShipImage})` }}>
              <div className="service-content">
              <h3><a href="/SeaServices" className="no-underline-link">SEA SERVICES</a></h3>
              </div>
            </div>
            <div className="service-item" style={{ backgroundImage: `url(${cargoTransportImage})` }}>
              <div className="service-content">
              <h3><a href="/GroundServices" className="no-underline-link">GROUND SERVICES</a></h3>
              </div>
            </div>
          </div>
        </div>
      
      <section className="more-services-section">
                <h2>MORE SERVICES</h2>
                <p style={{fontSize:'17px'}}>We Offer The Following Services</p>
                <div className="more-services-container">
                    <div className="more-service-item">
                        <div className="more-service-icon">✈</div>
                        <h3>Intermodal Transportation</h3>
                        <p>involves a transshipment of goods between different modes of transport using a single cargo unit.</p>
                        <a href="#learn-more" className="learn-more">Use Service</a>
                    </div>
                    <div className="more-service-item">
                        <div className="more-service-icon">🚢</div>
                        <h3>Last Mile Delivery</h3>
                        <p>It Refers to the process of delivering goods to a final destination, typically the end customer's doorstep.</p>
                        <a href="#learn-more" className="learn-more">Use Service</a>
                    </div>
                    <div className="more-service-item">
                        <div className="more-service-icon">🚚</div>
                        <h3>Freight Forwarding</h3>
                        <p>It is the process of organizing and coordinating the transfer of commodities across international borders on behalf of shippers and receivers.</p>
                        <a href="#learn-more" className="learn-more">Use Service</a>
                    </div>
                    <div className="more-service-item">
                        <div className="more-service-icon">🏢</div>
                        <h3>Reverse Logistics</h3>
                        <p>It involves retrieving goods that have been sold so that they can be repurposed or recycled in some way.</p>
                        <a href="#learn-more" className="learn-more">Use Service</a>
                    </div>
                    <div className="more-service-item">
                        <div className="more-service-icon">📦</div>
                        <h3>Supply Chain Consultation</h3>
                        <p>It is the process of monitoring and optimization of the production and distribution of a company's products and services.</p>
                        <a href="#learn-more" className="learn-more">Use Service</a>
                    </div>
                    <div className="more-service-item">
                        <div className="more-service-icon">🚛</div>
                        <h3>Hazardous Material Shipping</h3>
                        <p>It is responsible for packaging and labeling hazardous materials correctly, and providing the required documentation.</p>
                        <a href="#learn-more" className="learn-more">Use Service</a>
                    </div>
                </div>
            </section>
            <PartnersSection/>
          <Footer/>
    </div>
  );
};

export default Homepage;