import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/facilities-food">
        FACILITIES AND FOOD
      </a>
      <a className="menu-item" href="/property">
        PROPERTY
      </a>
      <a className="menu-item" href="/onsite-recreation">
        ONSITE RECREATION
      </a>
      <a className="menu-item" href="/offsite-recreation">
        OFFSITE RECREATION
      </a>
      <a className="menu-item" href="/rental">
        RENTAL INFORMATION
      </a>
      <a className="menu-item" href="/floor-plan">
        FLOOR PLANS
      </a>
    </Menu>
  );
};
