import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Reviews.css';
import client1 from '../images/client1.jpg';
import client2 from '../images/client2.jpg';
import client3 from '../images/client3.jpg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const testimonials = [
  {
    name: 'Client Name 1',
    profession: 'Profession',
    image: client1, 
    quote: 'Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita'
  },
  {
    name: 'Client Name 2',
    profession: 'Profession',
    image: client2, 
    quote: 'Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita'
  },
  {
    name: 'Client Name 3',
    profession: 'Profession',
    image: client3, 
    quote: 'Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita'
  }
];

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow next" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="home-container">
      <Navbar/>
      <div className="hero-section">
        <h1>TESTIMONIAL</h1>
      </div>
      
      <div className="why-choose-us">
        <div className="content">
          <h2>WHY CHOOSE US</h2>
          <h3>Faster, Safe and Trusted Logistics Services</h3>
          <p>Choose us for our commitment to streamlined logistics solutions that optimize efficiency and enhance customer satisfaction. Our innovative technology and dedicated support ensure a seamless supply chain experience tailored to your unique needs.</p>
          <ul>
            <li><span>Best In Industry</span></li>
            <li><span>Emergency Services</span></li>
            <li><span>24/7 Customer Support</span></li>
          </ul>
        </div>
        <img src={require('../images/blog-1.jpg')} alt="Logistics" />
      </div>

      <div className="testimonial-section">
        <h2>TESTIMONIAL</h2>
        <h3>Our Clients Say</h3>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <img src={testimonial.image} alt={testimonial.name} className="client-image" />
              <div className="client-info">
                <h4>{testimonial.name}</h4>
                <p className="profession">{testimonial.profession}</p>
                <p className="quote">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Footer/>
    </div>
  );
};

export default Reviews;
