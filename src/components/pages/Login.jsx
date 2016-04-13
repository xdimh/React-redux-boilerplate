import React from 'react';
import Router from 'react-router';
import Link  from 'react-router/lib/Link';
import Panel from 'react-bootstrap/lib/Panel';
import Input from 'react-bootstrap/lib/Input';
import Button from 'react-bootstrap/lib/Button';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as loginActions from '../../actions/actions'

var LoginPage = React.createClass({

  getInitialState: function(){
      console.log('state:',this.state);
      console.log('props:',this.props);
      return {

      }
  },

  render: function(){
      console.log('state in render:',this.state);
      console.log('props in render:',this.props);
    return <div>

        <div className="login-page">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4">
                  <img src={require("../../common/images/flat-avatar.png")} className="user-avatar" />
              <h1>Ani Theme </h1>
              <br />
              <form role="form" onSubmit={this.handleLogin}>
                <Input type="text" className="form-control input-underline input-lg" id="" placeholder='Email' />
                <Input type="password" className="form-control input-underline input-lg" id="" placeholder="Password" />
                <br /><br />
                <Button type="submit" className="btn btn-white btn-outline btn-lg btn-rounded progress-login" >Log in</Button>
                <Link to="signup"><Button type="submit" className="btn btn-white btn-outline btn-lg btn-rounded" >Register Here</Button></Link>
              </form>
            </div>  
          </div>
        </div>
        
      </div>
  },

  setLoginID: function(e) {

    this.setState({
      loginID: e.target.value,
      loginError: ''
    });

  },

  setPassword: function(e) {

    this.setState({
      password: e.target.value,
      loginError: ''
    });

  },

  handleLogin: function(e){
    e.preventDefault();
    //this.props.history.pushState(null, '/dashboard/home');
    //// this.transitionTo('dashboard');
    this.props.actions.issueLoginRequest();
    return false;

  }

});


function mapStateToProps(state) {
    return {
        login: state.login
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage)