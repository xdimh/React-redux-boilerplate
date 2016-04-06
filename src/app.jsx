import React from 'react';
import ReactDOM from 'react-dom';

import Link from 'react-router/lib/Link';
import Route from 'react-router/lib/Route';
import Router from 'react-router/lib/Router';
import createHistory from 'history/lib/createHistory';
import useBasename from 'history/lib/useBasename';
import About from './components/about/about';
import IndexBox from './components/indexbox/indexbox';
import "./common/styles/app-base.less";
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

const history = useBasename(createHistory)({
    basename: '#/'
});

history.pushState(null, '/');

function handleHashChange() {
    var path = window.location.hash.substr(1);
    history.pushState(null, path);
}

window.addEventListener('hashchange', handleHashChange, false);

const routeConfig = [
    { path: '/',
        component: App,
        indexRoute: { component: Dashboard },
        childRoutes: [
            { path: 'about', component: About },
            { path: 'inbox',
                component: Inbox,
                childRoutes: [
                    { path: '/messages/:id', component: Message },
                    { path: 'messages/:id',
                        onEnter: function (nextState, replaceState) {
                            replaceState(null, '/messages/' + nextState.params.id)
                        }
                    }
                ]
            }
        ]
    }
]

React.render(<Router routes={routeConfig} />, document.body)




var App = React.createClass({
   render : function() {
       return (
           <div>
               <h1>App</h1>
               <ul>
                   <li><Link to="/about">About</Link></li>
                   <li><Link to="/inbox">Inbox</Link></li>
               </ul>
               {this.props.children}
           </div>
       )
   }
});

ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
            <Route path="about" component={About} />
            <Route path="inbox" component={IndexBox} />
        </Route>
    </Router>,
    document.getElementById('app')
);


module.exports = App;