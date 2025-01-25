import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import User from './User';
import Newbook from './Newbook';
import Oldbook from './Oldbook';
import Form2 from './Form2'; 

function App() {
  return (
    <>
      <h1>Welcome to the React CLS</h1>
      <BrowserRouter>
        <ul>
          <li><Link to="/">HOME PAGE</Link></li>
          <li><Link to="/aboutus">ABOUT SECTION</Link></li>
          <li><Link to="/contact-us">CONTACT US</Link></li>
          <li><Link to="/user/10">USER 10</Link></li>
          <li><Link to="/user/13">USER 13</Link></li>
          <li><Link to="/user/134">USER 134</Link></li>
          <li><Link to="/book/new-book">NEW-BOOK</Link></li>
          <li><Link to="/book/old-book">OLD-BOOK</Link></li>
          <li><Link to="/signup">SIGNUP FORM</Link></li> 
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/book/new-book" element={<Newbook />} />
          <Route path="/book/old-book" element={<Oldbook />} />
          <Route path="/signup" element={<Form2 />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;