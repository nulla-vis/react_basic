import React from "react";

// Components
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
// Styles

// Images
// import ReactLogo from './images/react-logo.png';

/*
function App() {
  const imageStyle = {
    width: '40px'
  }

  const divMargin = {
    marginTop: '10px'
  }
  return (
    // <OrderedList />
    // <div style={divMargin}>
    //   <img src={ReactLogo} alt="" style={imageStyle}/>
    //   <h1>Fun facts about React</h1>
    //   <ul>
    //     <li>Was first released in 2013</li>
    //     <li>Was originally created by Jordan Walke</li>
    //     <li>Has well over 100k stars on Github</li>
    //     <li>Is maintained by Facebook</li>
    //     <li>Powers thousands of enterprise apps, including mobile apps</li>
    //   </ul>
    // </div>
  );
};
*/
function App() {
  return (  
    <>
      <Navbar />
      <MainContent />
      <Footer />
    </>
  );
};

export default App;
