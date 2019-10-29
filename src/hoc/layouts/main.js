import React, { Component } from 'react';
import Helmet from 'react-helmet';


import Header from '../../components/Header/header';
import Nav from '../../components/Header/nav';


class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />

      </div>
    )
  }

}

export default Main;
