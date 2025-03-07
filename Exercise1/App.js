import logo from './logo.svg';
import './App.css';



function App() {

  let date = new Date();
  let currentYear = date.getFullYear()

  const isLoggedIn = false;
  

  return (
    <div>

        
        

        <h1> ENSF-381: Full Stack Web Development </h1>
        <p> React Components </p>

        <p> Current Year: {currentYear}</p>

        <p> {isLoggedIn ? "Welcome, user!" : "Please login."}</p>

    </div>
  );
}

export default App;
