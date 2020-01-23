import React, { Component, Suspense, Fragment } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import User from './containers/User';
import Welcome from './containers/Welcome';

const Posts = React.lazy(() => import('./containers/Posts'));

class App extends Component {
  state = {
    show: false
  };

  modeHandler = () => {
    this.setState(prevState => {
      return { showPosts: !prevState.showPosts };
    });
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.modeHandler}>Toogle Mode</button>
        {this.state.showPosts ? (<Suspense fallback={<div>Loading...</div>}> <Posts /> </Suspense>) : <User />}
      </Fragment>

      // <BrowserRouter>
      //   <React.Fragment>
      //     <nav>
      //       <NavLink to="/user">User Page</NavLink> |&nbsp;
      //       <NavLink to="/posts">Posts Page</NavLink>
      //     </nav>
      //     <Route path="/" component={Welcome} exact />
      //     <Route path="/user" component={User} />
      //     <Route
      //       path="/posts"
      //       render={() => (
      //         <Suspense fallback={<div>Loading...</div>}>
      //           <Posts />
      //         </Suspense>
      //       )} />
      //   </React.Fragment>
      // </BrowserRouter>
    );
  }
}

export default App;
