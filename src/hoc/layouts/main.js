import React, { Component } from 'react';
import Helmet from 'react-helmet';


import Header from '../../components/Header/header';
import Nav from '../../components/Header/nav';
import SideNav from '../../components/SideNav/sidenav';
import BackgroundLines from "../../components/Widgets/backgroundLines";


class Main extends Component {
  render() {
    return (
      <div className="mi-wrapper">
        <BackgroundLines />
        <SideNav />
        {this.props.children}
      </div>
    )
  }

}

export default Main;
