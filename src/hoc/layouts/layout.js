import React, { Component } from 'react';
import SideNav from '../../components/SideNav/sidenav';
import BackgroundLines from "../../components/Widgets/backgroundLines";


class Layout extends Component {
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

export default Layout;
