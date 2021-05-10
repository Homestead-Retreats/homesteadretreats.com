import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between

  li {
    padding 18px 10px;
  }

  @media ( max-width: 768px ) {
    flex-flow: column nowrap;
    background-color: rgba(255,255,255,.7);
    position: fixed;
    transform: ${({open})=> open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;


    li{
      color: white;
    }
  }
`

const LeftNav = ({ open }) => {
  return (
    <Ul open={open} className="header-links">
      <li><Link to="/" className="header-link-home">ABOUT US</Link></li>
      <li><Link to="/facilities-food" className="header-link-facilities">FACILITIES AND FOOD</Link></li>
      <li><Link to="/property" className="header-link-property">PROPERTY</Link></li>
      <li><Link to="/onsite-recreation" className="header-link-onsite">ONSITE RECREATION</Link></li>
      <li><Link to="/offsite-recreation" className="header-link-offsite">OFFSITE RECREATION</Link></li>
      <li><Link to="/rental" className="header-link-rental">RENTAL INFORMATION</Link></li>
      <li><Link to="/floor-plan" className="header-link-floor">FLOOR PLANS</Link></li>
    </Ul>
  )
}

export default LeftNav