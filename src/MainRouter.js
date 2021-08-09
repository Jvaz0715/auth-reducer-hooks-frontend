import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import NavBar from './components/NavBar/NavBar';
// import Auth from './components/Auth/Auth';
// import Home from './components/Home/Home';
// import NotFound from './components/NotFound/NotFound';

const Home = React.lazy(() => import('./components/Home/Home'));
const Auth = React.lazy(() => import('./components/Auth/Auth'));
const NotFound = React.lazy(() => import('./components/NotFound/NotFound'));
const NavBar = React.lazy(() => import('./components/NavBar/NavBar'));

function MainRouter() {
    return (
        <>
        <NavBar />
        <Switch>
            <Route exact path="sign-up" component={Auth}/>
            <Route exact path="login" component={Auth}/>

            <Route exact path="/logout" render={() => <Redirect to="/login" />}/>
            <Route exact path="/" component={Home} />
            <Route component={NotFound}/>
        </Switch>
        </>
    );
};

export default MainRouter;
