import logo from './logo.svg';
import './App.css';
import HomeFun from'./Home.js'
import AboutFun from './About.js'
import ContactFun from './Contact.js'
import Topics from './EngineeringTopics.js';

function App() {

  let date = new Date();
  let currentYear = date.getFullYear()

  const isLoggedIn = false;
  const newTitleHome = "Home Page";
  const newDescriptionHome = "Welcome to our website";

  const newTitleAbout = "About Page";
  const newDescriptionAbout = "We are passionate about delivering quality experiences";

  const newTitleContact = "Contact Page";
  const newDescriptionContact = "Feel free to reach out to us via email or phone.";

  return (
    <div>

        
        

        <h1> ENSF-381: Full Stack Web Development </h1>
        <p> React Components </p>

        <p> Current Year: {currentYear}</p>

        <p> {isLoggedIn ? "Welcome, user!" : "Please login."}</p>

        <HomeFun title = {newTitleHome} description = {newDescriptionHome}/>
        <AboutFun title = {newTitleAbout} description = {newDescriptionAbout}/>
        <ContactFun title = {newTitleContact} description = {newDescriptionContact}/>

        <Topics/>

    </div>
  );
}

export default App;
