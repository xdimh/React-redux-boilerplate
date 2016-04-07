import React from 'react';
import Router from 'react-router';
import SidebarWidgets from './SidebarWidgets';
import MenuBar from './MenuBar';

var Sidebar = React.createClass({

  getInitialState: function(){
    return {};
  },

  render: function(){
  
    return ( <aside id="sidebar">
        <div className="sidenav-outer">
          <MenuBar></MenuBar>
          <SidebarWidgets></SidebarWidgets>
        </div>
      </aside>
    );
  }

});

export default Sidebar;