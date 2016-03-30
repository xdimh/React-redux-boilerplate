import React from 'react'
import ReactDOM from 'react-dom'

import Link from 'react-router/lib/Link'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import About from './about/about'
import IndexBox from './indexbox/indexbox'

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