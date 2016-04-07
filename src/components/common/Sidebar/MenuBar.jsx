import React from 'react';
import Router from 'react-router';
import { Link } from 'react-router';
import classNames from "classnames";
import AppStore from '../../../stores/AppStore';
import Translate from '../Translate';

var MenuBar = React.createClass({

  getInitialState: function(){
    return {};
  },

  componentDidMount: function(){
    AppStore.addChangeListener(this._onChange);
  },

  componentWillLeave: function() {
    AppStore.removeChangeListener(this._onChange);
  },
  
  render: function(){
  
    return (
      <div className="side-menu">
        <div className="menu-body">
          <ul className="nav nav-pills nav-stacked sidenav">
            <li className={classNames({'active': this.state.home})}>
              <Link to="/dashboard/home">
                <span className="glyphicon glyphicon-home"></span>
              </Link>
              <ul className="nested-dropdown animated fadeIn">
                <li><Link to="/dashboard/home">{Translate.getWord('dashboard')}</Link></li>
              </ul>
            </li>
            <li className={classNames({'active': this.state.typography})}>
              <Link to="/dashboard/typography">
              <span className="glyphicon glyphicon-text-size"></span>
              </Link>
              <ul className="nested-dropdown animated fadeIn">
                <li><Link to="/dashboard/typography">{Translate.getWord('typography')}</Link></li>
              </ul>
            </li>
            <li className={classNames({'active': this.state.grid})}>
              <Link to="/dashboard/grid">
              <span className="glyphicon glyphicon-th-large"></span>
              </Link>
              <ul className="nested-dropdown animated fadeIn">
                <li><Link to="/dashboard/grid">{Translate.getWord('grid')}</Link></li>
              </ul>
            </li>
            <li className={classNames({'active': this.state.table})}>
              <Link to="/dashboard/table">
              <span className="glyphicon glyphicon-list"></span>
              </Link>
              <ul className="nested-dropdown animated fadeIn">
                <li><Link to="/dashboard/table">{Translate.getWord('table')}</Link></li>
              </ul>
            </li>
            <li className={classNames({'active': this.state.table})}>
              <Link to="/dashboard/elements">
                <span className="glyphicon glyphicon-equalizer"></span>
              </Link>
              <ul className="nested-dropdown animated fadeIn">
                <li className="sidemenu-header">{Translate.getWord('form')}</li>
                <li><Link to="/dashboard/elements">{Translate.getWord('elements')}</Link></li>
                <li><Link to="/dashboard/components">{Translate.getWord('components')}</Link></li>
              </ul>
            </li>
            <li className={classNames({'active': this.state.userInterface})}>
              <Link to="/dashboard/buttons">
                <span className="glyphicon glyphicon-cloud-download"></span>
              </Link>
              <ul className="nested-dropdown animated fadeIn">
                <li className="sidemenu-header">{Translate.getWord('user_interface')}</li>
                <li><Link to="/dashboard/buttons">{Translate.getWord('buttons')}</Link></li>
                <li><Link to="/dashboard/dropdowns">{Translate.getWord('dropdown')}</Link></li>
                <li><Link to="/dashboard/icons">{Translate.getWord('icons')}</Link></li>
                <li><Link to="/dashboard/panels">{Translate.getWord('panels')}</Link></li>
                <li><Link to="/dashboard/alerts">{Translate.getWord('alerts')}</Link></li>
                <li><Link to="/dashboard/progressbars">{Translate.getWord('progressbars')}</Link></li>
                <li><Link to="/dashboard/paginations">{Translate.getWord('pagination')}</Link></li>
                <li><Link to="/dashboard/other-elements">{Translate.getWord('other_elements')}</Link></li>
              </ul>
            </li>
            <li className={classNames({'active': this.state.charts})}>
              <Link to="/dashboard/chartjs">
                <span className="glyphicon glyphicon-signal"></span>  
              </Link>
              <ul className="nested-dropdown animated fadeIn">
                <li className="sidemenu-header">{Translate.getWord('charts')}</li> 
                <li><Link to="/dashboard/chartjs">Chart.js</Link></li>
                <li><Link to="/dashboard/chartc3">C3.js</Link></li>
              </ul>
            </li>
            <li className={classNames({'active': this.state.calendar})}> 
              <Link to="/dashboard/calendar">
                <span className="glyphicon glyphicon-calendar"></span>
              </Link>
              <ul className="nested-dropdown animated fadeIn">
                <li><Link to="/dashboard/calendar">{Translate.getWord('calendar')}</Link></li>
              </ul>
            </li>
            <li className={classNames({'active': this.state.mail})}>
              <Link to="/dashboard/inbox">
                <span className="glyphicon glyphicon-envelope"></span>
              </Link>
              <ul className="nested-dropdown animated fadeIn">
                <li className="sidemenu-header">{Translate.getWord('mail')}</li>
                <li><Link to="/dashboard/inbox">{Translate.getWord('inbox')}</Link></li>
                <li><Link to="/dashboard/compose">{Translate.getWord('compose')}</Link></li>
              </ul>
            </li>
            <li className={classNames({'active': this.state.invoice})}> 
              <Link to="/dashboard/invoice">
                <span className="glyphicon glyphicon-list-alt"></span>
              </Link>
              <ul className="nested-dropdown animated fadeIn">
                <li><Link to="/dashboard/invoice">{Translate.getWord('invoice')}</Link></li>
              </ul>
            </li>
            <li className={classNames({'active': this.state.docs})}> 
              <Link to="/dashboard/docs">
                <span className="glyphicon glyphicon-credit-card"></span>
              </Link>
              <ul className="nested-dropdown animated fadeIn">
                <li><Link to="/dashboard/docs">Docs</Link></li>
              </ul>
            </li>
            <li className={classNames({'active': this.state.pages})}>
              <Link to="/dashboard/blank">
                <span className="glyphicon glyphicon-duplicate"></span>
              </Link>
              <ul className="nested-dropdown animated fadeIn">
                <li className="sidemenu-header">{Translate.getWord('pages')}</li>
                <li><Link to="/dashboard/blank">{Translate.getWord('blankpage')}</Link></li>
                <li><Link to="login">{Translate.getWord('login')}</Link></li>
                <li><Link to="signup">{Translate.getWord('signup')}</Link></li>
                <li><Link to="error-page">{Translate.getWord('404page')}</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

    );
      
  },

  _onChange: function(){

    this.setState({
      language: AppStore.getLanguage()
    });

  }

});

export default MenuBar;