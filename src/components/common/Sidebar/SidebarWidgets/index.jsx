import React from 'react';
import Router from 'react-router';
import SidebarCalendar from './SidebarCalendar';
import SidebarNewsfeed from './SidebarNewsfeed';
import SidebarProfile from './SidebarProfile';

var SidebarWidgets = React.createClass({

  getInitialState: function(){
    return {};
  },

  render: function(){
  
    return ( <div className="side-widgets">
	      <div className="widgets-content">
	    		<SidebarProfile />
	    		<SidebarCalendar />
	    		<SidebarNewsfeed />
	    	</div>
    	</div>
    );
  }

});

export default SidebarWidgets;