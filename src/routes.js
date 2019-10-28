
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './components/Routes/About/about';
import Blogs from './components/Routes/Blogs/blogs';
import Contact from './components/Routes/Contact/contact';
import Resume from './components/Routes/Resume/resume';


class Routes extends Component {
  render(){
    return(
      <div>
        <Switch>
          <Route path="/blogs" component={Blogs}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/about" exact component={About}/>
          <Route path="/" exact component={About}/>
        </Switch>
      </div>
    )
  }
}

export default Routes;
