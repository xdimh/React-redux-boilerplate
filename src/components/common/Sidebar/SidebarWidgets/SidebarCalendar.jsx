import React from 'react';
import Router from 'react-router';
import $ from 'jquery';
import fullcalendar from 'fullcalendar';

var SidebarCalendar = React.createClass({

  getInitialState: function(){
    return {};
  },

  componentDidMount: function() {
    $(this.refs.menuCalendar).fullCalendar({
        // put your options and callbacks here
        contentHeight: 'auto',
        header: { left: 'title',
                  right: 'prev,next',
                  center: '' }
    })

  },

  render: function(){
  
    return ( <div className="calendar-container text-center">
        <div ref="menuCalendar"></div>
      </div>
    );
  }

});

export default SidebarCalendar;