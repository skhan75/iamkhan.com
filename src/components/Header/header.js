import React from 'react';
import { Link } from 'react-router-dom';
import routesMap from '../../data/routesMap';


const Header = () => {
  return (
    <header id="header">
      <h1 className="index-link">
        { routesMap
            .filter((l) => l.index)
            .map((l) => (
                <Link key={l.label} to={l.path}>{l.label}</Link>    
        ))}
      </h1>
      <nav className="links">
        <ul>
          {routesMap.filter((l) => !l.index).map((l) => (
            <li key={l.label}>
              <Link to={l.path}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header;
