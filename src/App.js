import React, {lazy, Suspense} from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import * as ROUTES from './constants/routes'
const Home = lazy(() => import ('./pages/home'))
const About = lazy(() => import('./pages/About'))
const Profile = lazy(() => import('./pages/Profile'))
const NotFound = lazy(() => import('./pages/404'))

function App() {
  return (
    <Router>
      <Suspense>
          <Switch>
              <Route path={ROUTES.HOME} component={Home} exact />
              <Route path={ROUTES.ABOUT_ME} component={About} />
              <Route path={ROUTES.PROFILE} component={Profile} />
              <Route component={NotFound} />
          </Switch>
        </Suspense>
    </Router>
  );
}

export default App;
