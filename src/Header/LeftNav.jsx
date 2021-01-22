import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 500px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const LeftNav = ({ open }) => {
  return (
    <Ul className="header-links">
    <Link to="/" className="header-link-home">ABOUT US</Link>
    <Link to="/facilities-food" className="header-link-facilities">FACILITIES AND FOOD</Link>
    <Link to="/property" className="header-link-property">PROPERTY</Link>
    <Link to="/onsite-recreation" className="header-link-onsite">ONSITE RECREATION</Link>
    <Link to="/offsite-recreation" className="header-link-offsite">OFFSITE RECREATION</Link>
    <Link to="/rental" className="header-link-rental">RENTAL INFORMATION</Link>
    <Link to="/floor-plan" className="header-link-floor">FLOOR PLANS</Link>
    </Ul>
  )
}

export default LeftNav