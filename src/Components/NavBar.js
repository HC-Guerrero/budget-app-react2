import { Link } from 'react-router-dom';
import './navBar.css';

function NavBar() {
  return (
    <nav className='Navbar'>
      <h1>
        <Link to='/transactions/'>Current Transaction Records</Link>
      </h1>
      <h1>Bank Account Total:</h1>
      <button className='NewBtn'>
        <Link to='/transactions/new'>
          {' '}
          <strong>New Transaction </strong>
        </Link>
      </button>
    </nav>
  );
}
export default NavBar;
