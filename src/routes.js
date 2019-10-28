
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './components/Routes/About/about';
import Blogs from './components/Routes/Blogs/blogs';
import Contact from './components/Routes/Contact/contact';
import Resume from './components/Routes/Resume/resume';
import Art from './components/Routes/Art/art';
import Photography from './components/Routes/Photography/photography';
import Projects from './components/Routes/Projects/projects';

import Layout from './hoc/layouts/main';


class Routes extends Component {
  render(){
    return(
      <Layout>
        <Switch>
          <Route path="/art" component={Art}/>
          <Route path="/photography" component={Photography}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/blogs" component={Blogs}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/about" exact component={About}/>
          <Route path="/" exact component={About}/>
        </Switch>
      </Layout>
    )
  }
}

export default Routes;
