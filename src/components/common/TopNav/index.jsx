import React from 'react';
import Router from 'react-router';
import { Link } from 'react-router';
import {NavDropdown, MenuItem, Table, Button} from 'react-bootstrap';
import $ from 'jquery';
import AppActions from '../../../actions/AppActions';
import AppStore from '../../../stores/AppStore';
import Translate from '../Translate';

var TopNav = React.createClass({

  getInitialState: function(){
    
    return {
      rtlClass: true
    };

  },

  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },

  componentWillLeave: function() {
    AppStore.removeChangeListener(this._onChange);
  },

  render: function(){
    return ( <nav className="navbar topnav-navbar navbar-fixed-top" role="navigation">

              <div className="navbar-header text-center">
                <button type="button" className="navbar-toggle" onClick={this.showMenu} >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                <a className="navbar-brand" ui-sref="home">Ani Theme React</a>
              </div>
              <div className="collapse navbar-collapse">
                <form className="navbar-form navbar-left" role="search">
                  <span className="glyphicon glyphicon-search"></span>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="" />
                  </div>      
                </form>
                <ul className="nav navbar-nav">
                  <li>
                    <NavDropdown eventKey={1}
                      title={<span>
                        <i className="glyphicon glyphicon-envelope"></i>
                        <span className="badge badge-green">5</span>
                        </span>
                      }
                      noCaret
                    >
                      <MenuItem className="messages-top text-center" disabled>
                        {Translate.getWord('topnav1')}
                      </MenuItem>
                      <MenuItem eventKey="1" className="dropdown-messages">
                          <div className="message-sender">
                            {Translate.getWord('lucy')}
                          </div>
                          <div className="message-header">
                            {Translate.getWord('topnavheader1')}
                          </div>
                      </MenuItem>
                      <MenuItem eventKey="2" className="dropdown-messages">
                          <div className="message-sender">
                            {Translate.getWord('diptesh')}
                          </div>
                          <div className="message-header">
                            {Translate.getWord('topnavheader2')}
                          </div>
                      </MenuItem>
                      <MenuItem eventKey="3" className="dropdown-messages">
                          <div className="message-sender">
                            {Translate.getWord('weng')}
                          </div>
                          <div className="message-header">
                            {Translate.getWord('topnavheader3')}
                          </div>
                      </MenuItem>
                      <MenuItem eventKey="4" className="dropdown-messages">
                          <div className="message-sender">
                            {Translate.getWord('jade')}
                          </div>
                          <div className="message-header">
                            {Translate.getWord('topnavheader4')}
                          </div>
                      </MenuItem>
                    </NavDropdown>
                  </li>
                  <li>
                    <NavDropdown eventKey={2} 
                      title={<span>
                        <i className="glyphicon glyphicon-bell"></i>
                        <span className="badge badge-red">13</span>
                        </span>
                      }
                      noCaret
                    >
                    <MenuItem className="notification-header text-center" disabled>
                      {Translate.getWord('threenotifications')}
                    </MenuItem>
                    <MenuItem eventKey={1} className="dropdown-notifications">
                      <div className="notification">
                        <i className="fa fa-thumbs-up"></i>
                        {Translate.getWord('runuma')}
                      </div>
                    </MenuItem>
                    <MenuItem eventKey={2} className="dropdown-notifications">
                      <div className="notification">
                        <i className="fa fa-thumbs-up"></i>
                        {Translate.getWord('harshita')}
                      </div>
                    </MenuItem>
                    <MenuItem eventKey={3} className="dropdown-notifications">
                      <div className="notification">
                        <i className="fa fa-user-plus"></i>
                        {Translate.getWord('archana')}
                      </div>
                    </MenuItem>
                    <MenuItem eventKey={4} className="dropdown-notifications">
                      <div className="notification">
                        <i className="fa fa-user-times"></i>
                        {Translate.getWord('animesh')}
                      </div>
                    </MenuItem>
                    </NavDropdown>
                  </li>
                </ul>

                <ul className="nav navbar-nav pull-right navbar-right"> 
        
              {/*}      <NavDropdown eventKey={3} 
                      title={<span>
                        <i className="fa fa-circle"></i>
                        </span>
                      }
                      noCaret className="dropdown color-picker"
                    >
                      
                        <Table bordered className="table color-swatches-table text-center no-m-b">
                          <tbody>
                            <tr>
                              <td className="text-center colorr">
                                  <a href="javascript:;" onClick={() => this.changeTheme('blue')} className="theme-picker">
                                      <i className="fa fa-circle blue-base"></i>
                                  </a>
                              </td>
                              <td className="text-center colorr">
                                  <a href="javascript:;" onClick={this.changeTheme('green')} className="theme-picker">
                                      <i className="fa fa-circle green-base"></i>
                                  </a>
                              </td>
                              <td className="text-center colorr">
                                  <a href="javascript:;" ng-click="changeTheme('red')" className="theme-picker">
                                      <i className="fa fa-circle red-base"></i>
                                  </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center colorr">
                                  <a href="javascript:;" ng-click="changeTheme('purple')" className="theme-picker">
                                      <i className="fa fa-circle purple-base"></i>
                                  </a>
                              </td>
                              <td className="text-center colorr">
                                  <a href="javascript:;" ng-click="changeTheme('midnight-blue')" className="theme-picker">
                                      <i className="fa fa-circle midnight-blue-base"></i>
                                  </a>
                              </td>
                              <td className="text-center colorr">
                                  <a href="javascript:;" ng-click="changeTheme('lynch')" className="theme-picker">
                                      <i className="fa fa-circle lynch-base"></i>
                                  </a>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      
                    </NavDropdown> */}
                  
                  <li>
                    <a href="javascript:;" onClick={this.rightToLeft} >
                      <span> LTR/RTL </span>
                    </a>
                  </li> 
                  
                  <li className="dropdown">
                    <NavDropdown eventKey={4} title={<span>{Translate.getWord('lang')}</span>} noCaret >
                      <MenuItem eventKey={1} name='en' onSelect={this.changeLanguage}>English</MenuItem>
                      <MenuItem eventKey={2} name='de' onSelect={this.changeLanguage}>Dutch</MenuItem>
                      <MenuItem eventKey={3} name='ur' onSelect={this.changeLanguage}>اردو</MenuItem>
                      <MenuItem eventKey={4} name='hn' onSelect={this.changeLanguage}>हिन्दी</MenuItem>
                    </NavDropdown>
                  </li>

                  <NavDropdown eventKey={4} title={<span>
                    <img src={require("../../../common/images/flat-avatar.png")} className="topnav-img" alt="" />
                    <span className="hidden-sm">Ani Pascal</span>
                    </span>} noCaret className="dropdown admin-dropdown"
                  >
                      <li><Link to="/dashboard/profile">Profile</Link></li>
                      <li><Link to="/login">Logout</Link></li>
                  </NavDropdown>
                  
                </ul>
                 <a className="btn btn-rounded btn-bordered pull-right btn-primary" style={{'margin': '8px 10px'}} href="http://www.strapui.com/themes/ani-reactjs-theme/">Buy Now</a>
              
              </div>
            </nav>

    );
  },

  changeTheme: function(setTheme){

    $('<link>')
      .appendTo('head')
      .attr({type : 'text/css', rel : 'stylesheet/less'})
      .attr('href', '/app/src/common/styles/app-'+setTheme+'.less?v='+window.app_version);

    // console.log("inside change themes");
    // var styleObj = require('file!../../../common/styles/base.less');
    // console.log("styles", styleObj);
    // var style = require("style/useable!less!../../../common/styles/app-red.useable.less");
    // style.use();
    // console.log("style successful");
  },

  _onChange: function() {
    this.setState({language: AppStore.getLanguage()});
  },

  changeLanguage: function(e){
    AppActions.setLanguage(e.target.name);
  },

  rightToLeft: function(){
    this.setState({'rtlClass': !this.state.rtlClass});
    if(this.state.rtlClass){
      $('body').addClass('rtl');
    }
    else{
      $('body').removeClass('rtl');
    }
  },
  showMenu: function(){
   
      $('.dashboard-page').toggleClass('push-right');   
    
  }

});

export default TopNav;