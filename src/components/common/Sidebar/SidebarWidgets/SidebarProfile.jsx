import React from 'react';
import Router from 'react-router';
import { Link } from 'react-router';

var SidebarProfile = React.createClass({

  getInitialState: function(){
    return {};
  },

  render: function(){
  
    return ( <div className="text-center"> 
        <Link to="/dashboard/profile"><img src={require("../../../../common/images/flat-avatar.png")} className="user-avatar" /></Link>
        <div className="text-center avatar-name">Ani Pascal
        </div>
      </div>
    );
  }

});

export default SidebarProfile;