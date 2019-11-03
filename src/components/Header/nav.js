import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';
// import '../../styling/layout/sidebar.css';

const Nav = () => {
  return (
    <section id="sidebar">

      <section id="intro">
        <Link to="/" className="logo">
          LOGO
        </Link>
        <header>
          <h2>Sami Ahmad Khan</h2>
          <p><a href="mailto:sami.ahmadkhan12@gmail.com">sami.ahmadkhan12@gmail.com</a></p>
        </header>
      </section>

      <section className="blurb">

        <h2>About</h2>
        <p>
          Hi I&apos;m Sami. I like building things.
        </p>

        <ul className="actions">
          <li>
            {
              window.location.pathname !== `/resume`
              ?
              <Link to="/resume" className="button">Learn More</Link>
              :
              <Link to="/about" className="button">About Me</Link>
            }
          </li>
        </ul>

      </section>

      <section id="footer">
        <ul className="icons">
          { data.map((s) => (
            <li key={s.label}>
              <a href={s.link}>
                <FontAwesomeIcon icon={s.icon} />
              </a>
            </li>
          ))}
        </ul>

        <p className="copyright">&copy; Sami Ahmad Khan <Link to="/">iamkhan.com</Link>.</p>
      </section>

    </section>
  )
}

export default Nav;
