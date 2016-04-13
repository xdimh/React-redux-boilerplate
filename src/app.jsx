import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Link from 'react-router/lib/Link';
import Route from 'react-router/lib/Route';
import Router from 'react-router/lib/Router';
import hashHistory from 'react-router/lib/hashHistory';
//import createHistory from 'history/lib/createHistory';
//import useBasename from 'history/lib/useBasename';
import "./common/styles/app-base.less";
import appStore from './stores/appStore';
import NProgress from 'nprogress';
//import { createHistory, useBasename } from 'history';
NProgress.configure({ showSpinner: false });
const store = appStore();
//const history = useBasename(createHistory)({
//    basename: '#/'
//});
//
//history.pushState(null, '/');
//
//function handleHashChange() {
//    var path = window.location.hash.substr(1);
//    history.pushState(null, path);
//}
//
//window.addEventListener('hashchange', handleHashChange, false);

const rootRoute = {
    path: '/',
    component: require('./components/layouts/Base'),
    indexRoute: {
        component: require('./components/pages/Login')
    },
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
    <Provider store={store}>
        <Router history={hashHistory} routes={rootRoute} />
    </Provider>,
    document.getElementById('app')
);