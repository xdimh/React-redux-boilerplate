import React from 'react';
import { Link } from "react-router";

var ErrorPage = React.createClass({

  render: function() {
    return (

      <div>
      	<div className="login-page">
					<div className="row">
						<div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4">
				      <Link to="/dashboard/home" className="hvr-pulse-grow">
				      	<img src={require("../../common/images/flat-avatar.png")} className="user-avatar" />
				      </Link>
							<h1>Ani Theme </h1>
							<div className="four-container text-center">
								<h1>404</h1>
							</div>
							Oops! Page not found.
						</div>	
					</div>
				</div>
      </div>
      
    );
  }

});

export default ErrorPage;
