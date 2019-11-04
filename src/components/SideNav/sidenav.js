import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LineIcon from 'react-lineicons';
import logo from '../../static/me_icon.jpg';


class SideNav extends Component {
  state = {
    information: "",
    navigationToggled: false
  }

  navigationToggled = () => {
    this.setState({
      navigationToggled: !this.state.navigationToggled
    })
  }

  render() {
    return (
      <nav className={ this.state.navigationToggled ? "mi-header is-visible" : "mi-header"}>
        <button onClick={ this.navigationToggled } className="mi-header-toggler">
          {
            !this.state.navigationToggled
            ?
            <LineIcon name="menu" />
            :
            <LineIcon name="close" />
          }
        </button>

        <div className="mi-header-inner">
          <div className="mi-header-image">
            <Link to="/">
              <img src={logo}/>
            </Link>
          </div>

          <ul className="mi-header-menu">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/blogs">Blogs</NavLink></li>
            <li><NavLink to="/photography">Photography</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/resume">Resume</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <p className="mi-header-copyright">&copy; {new Date().getFullYear()} <b><a href="/">Sami Ahmad Khan</a></b></p>
        </div>
      </nav>
    )
  }
}

export default SideNav;
