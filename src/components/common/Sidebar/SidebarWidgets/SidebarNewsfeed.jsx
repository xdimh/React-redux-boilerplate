import React from 'react';
import Router from 'react-router';
import AppStore from '../../../../stores/AppStore';
import Translate from '../../Translate';

var SidebarNewsfeed = React.createClass({

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
  
    return ( <div className="news-feed">
        <div className="feed-header">{Translate.getWord('feed')}</div>
        <div className="feed-content">
          <ul className="feed">
            <li>
              <a href="">{Translate.getWord('li1')}</a> <span className="feed-date">25/4/2015</span>
            </li>
            <li>
              <a href="">{Translate.getWord('li2')}</a> <span className="feed-date">25/4/2015</span>
            </li>
            <li>
              <a href="">{Translate.getWord('li3')}</a> <span className="feed-date">25/4/2015</span>
            </li>
            <li>
              <a href="">{Translate.getWord('li4')}</a> <span className="feed-date">25/4/2015</span>
            </li>
          </ul>
        </div>
      </div> 
    );
  },

  _onChange: function(){
    this.setState({language: AppStore.getLanguage()});
  }

});

export default SidebarNewsfeed;