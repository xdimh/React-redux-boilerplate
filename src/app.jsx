import React from 'react';
import ReactDOM from 'react-dom';

import Link from 'react-router/lib/Link';
import Route from 'react-router/lib/Route';
import Router from 'react-router/lib/Router';
import hashHistory from 'react-router/lib/hashHistory';
import createHistory from 'history/lib/createHistory';
import useBasename from 'history/lib/useBasename';
import "./common/styles/app-base.less";
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

/*
const history = useBasename(createHistory)({
    basename: '#/'
});
*/

/*history.pushState(null, '/');*/

/*function handleHashChange() {
    var path = window.location.hash.substr(1);
    history.pushState(null, path);
}

window.addEventListener('hashchange', handleHashChange, false);*/

const rootRoute = {
    path: '/',
    component: require('./components/layouts/Base'),
    childRoutes: [
    //{
        //        component: require('./components/layouts/Dashboard'),
        //        indexRoute: {
        //            //component: require('./components/pages/dashboard/Home/Home')
        //        },
        //        childRoutes: [
        //        ]
        //},
    {
        path: '/login',
        component: require('./components/pages/Login'),
        childRoutes: []
    },
    {
        path: '/signup',
        component: require('./components/pages/Signup'),
        childRoutes: []
    },
    {
        path: '/error-page',
        component: require('./components/pages/ErrorPage'),
        childRoutes: []
    }
    ]
};

ReactDOM.render(
    <Router history={hashHistory} routes={rootRoute} />,
    document.getElementById('app')
);