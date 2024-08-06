// import './App.css';
// import BadgeImage from './BadgeImage.png'; 

// import React, { useState, useEffect } from 'react';

// const images = [
//   'https://img.huffingtonpost.com/asset/5c1229ce220000f605deb0c5.jpeg?ops=1200_630',
//   'https://saudigazette.com.sa/uploads/images/2019/04/08/1214223.JPG',
//   'https://img.etimg.com/thumb/msid-40865546,width-1200,height-630,imgsize-71319,overlay-economictimes/photo.jpg',
//   'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/11/819028-bjp-supporters-pti-050219-1637458725.jpg',
//   'https://avatars.mds.yandex.net/i?id=f0cf085d096eb752daf5fcc6e945c2779bb72a7b-12509309-images-thumbs&n=13'
// ];

// const ImageSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="slider-container">
//       <div 
//         className="slider" 
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="slide"
//             style={{ backgroundImage: `url(${image})` }}
//           />
//         ))}
//       </div>
//       <div className="dots-container">
//         {/* Right side dots, no functionality */}
//         <div className="dots-right">
//           {images.map((_, index) => (
//             <span
//               key={index}
//               className="dot" // No onClick handler
//             />
//           ))}
//         </div>
//         {/* Bottom dots with functionality */}
//         <div className="dots-bottom">
//           {images.map((_, index) => (
//             <span
//               key={index}
//               className={`dot ${index === currentIndex ? 'active' : ''}`}
//               onClick={() => goToSlide(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// function MainContent() {
//   return (
//     <div className="container">
//       <div className="content">
//         <div className="image-container">
//           <img src={BadgeImage} alt="BJP Badge" className="badge-image" />
//         </div>
//         <div className="text-content">
//           <h1>JOIN THE JOURNEY</h1>
//           <p>Be the change you want to see.</p>
//           <h2>JOIN <span className="highlight">TDPP</span></h2>
//           <p>
//             BJP is devoutly committed to building a strong and developed India which is unimaginable without the trust and the unflinching support of the people of India. Join us and be part of the unprecedented transformation that is changing the lives of all sections of society for better. Together, let's build 'Ek Bharat, Shreshtha Bharat' and witness the rise of New India under the charismatic leadership of PM Shri Narendra Modi.
//           </p>
//           <div className="buttons">
//             <button className="btn volunteer">JOIN AS VOLUNTEER</button>
//             <button className="btn member">BECOME A MEMBER</button>
//             <button className="btn donation">MAKE A DONATION</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-3">
//             <h3>Corporation</h3>
//             <ul>
//               <li><a href="#">Principles</a></li>
//               <li><a href="#">History</a></li>
//               <li><a href="#">Organizational Structure</a></li>
//               <li><a href="#">People's Representatives</a></li>
//             </ul>
//           </div>
//           <div className="col-md-3">
//             <h3>Achievements</h3>
//             <ul>
//               <li><a href="#">Achievements</a></li>
//               <li><a href="#">Events</a></li>
//               <li><a href="#">Media</a></li>
//               <li><a href="#">Election Report</a></li>
//             </ul>
//           </div>
//           <div className="col-md-3">
//             <h3>Publications</h3>
//             <ul>
//               <li><a href="#">Image Gallery</a></li>
//               <li><a href="#">Ringtone</a></li>
//               <li><a href="#">Muthamizharignar Kalaignar</a></li>
//             </ul>
//           </div>
//           <div className="col-md-3">
//             <h3>Address</h3>
//             <p>Anna Arivalayam,</p>
//             <p>No 367/369, Anna Salai, Teynampet,</p>
//             <p>Chennai-600018.</p>
//             <p>+(91)-044-24348258</p>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.2328117074!2d79.87864461652889!3d13.047985075540458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1722938295028!5m2!1sen!2sin"
//               width="430"
//               height="250"
//               style={{ border: 0, marginBottom: '60px' }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//         </div>
//         <div className="row social-icons">
//           <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
//           <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
//           <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
//         </div>
//         <div className="row copyright">
//           <p>Copyright &copy; TDPP</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// const App = () => {
//   return (
//     <div className="App">
//       <ImageSlider />
//       <MainContent />
//       <Footer />
//     </div>
//   );
// };

// export default App;

import './App.css';
import BadgeImage from './BadgeImage.png'; 
import images from './logo.jpeg';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Image1 from './Image1.jpeg'
import Image4 from './Image4.jpeg'
import Image6 from './Image6.jpeg'

const imagesList = [
  Image1,
  Image4,
  Image6,
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesList.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div 
        className="slider" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {imagesList.map((image, index) => (
          <div
            key={index}
            className="slide"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <div className="dots-container">
        {/* Right side dots, no functionality */}
        <div className="dots-right">
          {imagesList.map((_, index) => (
            <span
              key={index}
              className="dot" // No onClick handler
            />
          ))}
        </div>
        {/* Bottom dots with functionality */}
        <div className="dots-bottom">
          {imagesList.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="image-container">
          <img src={BadgeImage} alt="BJP Badge" className="badge-image" />
        </div>
        <div className="text-content">
          <h1>JOIN THE JOURNEY</h1>
          <p>Be the change you want to see.</p>
          <h2>JOIN <span className="highlight">TDPP</span></h2>
          <p>
            BJP is devoutly committed to building a strong and developed India which is unimaginable without the trust and the unflinching support of the people of India. Join us and be part of the unprecedented transformation that is changing the lives of all sections of society for better. Together, let's build 'Ek Bharat, Shreshtha Bharat' and witness the rise of New India under the charismatic leadership of PM Shri Narendra Modi.
          </p>
          <div className="buttons">
            <button className="btn volunteer">JOIN AS VOLUNTEER</button>
            <button className="btn member">BECOME A MEMBER</button>
            <button className="btn donation">MAKE A DONATION</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3>Corporation</h3>
            <ul>
              <li><a href="#">Principles</a></li>
              <li><a href="#">History</a></li>
              <li><a href="#">Organizational Structure</a></li>
              <li><a href="#">People's Representatives</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Achievements</h3>
            <ul>
              <li><a href="#">Achievements</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Media</a></li>
              <li><a href="#">Election Report</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Publications</h3>
            <ul>
              <li><a href="#">Image Gallery</a></li>
              <li><a href="#">Ringtone</a></li>
              <li><a href="#">Muthamizharignar Kalaignar</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Address</h3>
            <p>Anna Arivalayam,</p>
            <p>No 367/369, Anna Salai, Teynampet,</p>
            <p>Chennai-600018.</p>
            <p>+(91)-044-24348258</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.2328117074!2d79.87864461652889!3d13.047985075540458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1722938295028!5m2!1sen!2sin"
              width="430"
              height="250"
              style={{ border: 0, marginBottom: '60px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="row social-icons">
          <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
        </div>
        <div className="row copyright">
          <p>Copyright &copy; TDPP</p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [language, setLanguage] = useState('English');

  const handleLanguageChange = () => {
    setLanguage(language === 'English' ? 'Tamil' : 'English');
  };

  const navLabels = {
    English: {
      home: 'Home',
      latestEvents: 'Latest Events',
      model: 'Model',
      timeline: 'Timeline',
      achievements: 'Achievements',
      socialMedia: 'Social Media',
      party: 'Party',
      ideology: 'Ideology',
      history: 'History Of TDPP',
      organization: 'Organization Structure',
      representatives: 'Elected Representatives',
      resources: 'Resources',
      events: 'Events',
      media: 'Media',
      manifesto: 'Election Manifesto',
      voice: 'Voice to Recover',
      rights: 'Rights',
      gallery: 'Gallery',
      formC7: 'Form C7-General Election 2024',
      formC2: 'Form C2-General Election 2024',
      partyName: 'Telangana Dravida Prajala Party',
    },
    Tamil: {
      home: 'முகப்பு',
      latestEvents: 'சமீபத்திய நிகழ்வுகள்',
      model: 'மாதிரி',
      timeline: 'காலவரிசை',
      achievements: 'சாதனைகள்',
      socialMedia: 'சமூக ஊடகம்',
      party: 'கட்சி',
      ideology: 'தத்துவம்',
      history: 'டிடிபிபியின் வரலாறு',
      organization: 'நிறுவல் அமைப்பு',
      representatives: 'தேர்ந்தெடுக்கப்பட்ட பிரதிநிதிகள்',
      resources: 'வளங்கள்',
      events: 'நிகழ்வுகள்',
      media: 'ஊடகம்',
      manifesto: 'தேர்தல் அறிக்கை',
      voice: 'மீட்டெடுக்கும் குரல்',
      rights: 'உரிமைகள்',
      gallery: 'காட்சியகம்',
      formC7: 'படிவம் சி7-பொது தேர்தல் 2024',
      formC2: 'படிவம் சி2-பொது தேர்தல் 2024',
      partyName: 'தெலுங்கானா திராவிட மக்களின் கட்சி',
    }
  };

  const labels = navLabels[language];

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={images} alt="Logo" />
          <span>{labels.partyName}</span>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <span>{labels.home}</span>
            <div className="dropdown">
              <a href="#home1">{labels.latestEvents}</a>
              <a href="#home2">{labels.model}</a>
              <a href="#home3">{labels.timeline}</a>
              <a href="#home4">{labels.achievements}</a>
              <a href="#home5">{labels.socialMedia}</a>
            </div>
          </li>
          <li className="navbar-item">
            <span>{labels.party}</span>
            <div className="dropdown">
              <a href="#party1">{labels.ideology}</a>
              <a href="#party2">{labels.history}</a>
              <a href="#party3">{labels.organization}</a>
              <a href="#party4">{labels.representatives}</a>
            </div>
          </li>
          <li className="navbar-item">
            <a href="#achievements">{labels.achievements}</a>
          </li>
          <li className="navbar-item">
            <span>{labels.resources}</span>
            <div className="dropdown">
              <a href="#resources1">{labels.events}</a>
              <a href="#resources2">{labels.media}</a>
              <a href="#resources3">{labels.manifesto}</a>
              <a href="#resources4">{labels.voice}</a>
              <a href="#resources5">{labels.rights}</a>
              <a href="#resources6">{labels.gallery}</a>
              <a href="#resources7">{labels.formC7}</a>
              <a href="#resources8">{labels.formC2}</a>
            </div>
          </li>
        </ul>
        <button className="language-btn" onClick={handleLanguageChange}>
          {language}
        </button>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </nav>
      <ImageSlider />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
