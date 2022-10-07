import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import './styles.css';

const Navigation = () => {
  const iconStyle = {
    color: 'rgb(212, 209, 209)',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  return (
    <Navbar className="nav">
      <nav>
        <ul className="navLinks">
          <li>
            <Link to="/" className="headerList" style={iconStyle}>
              <h1>Crypto Metrics</h1>
            </Link>
          </li>
          <li className="headerList">
            <div className="icons-class">
              <FaMicrophone style={iconStyle} />
            </div>
          </li>
        </ul>
      </nav>
    </Navbar>
  );
};

export default Navigation;
