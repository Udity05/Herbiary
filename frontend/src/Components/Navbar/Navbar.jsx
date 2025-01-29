import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => (
  <nav className='container'>
    <h1 className='logo'><Link to="/">Herbiary</Link></h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/garden">Garden</Link></li>
      <li><Link to="/find">Search</Link></li>
      <button className="btn"><Link to="/signup">Sign Up</Link></button>
    </ul>
  </nav>
);

export default Navbar;
