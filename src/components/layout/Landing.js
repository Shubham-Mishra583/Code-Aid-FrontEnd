import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <>
        <section className="landing">
        <div className="dark-overlay">
            <div className="landing-inner">
            <h1 className="x-large">Code Aid</h1>
            <p className="lead">
                The home for developer communities 
            </p>
            <div className="buttons">
                <Link to = "/register" className="btn btn-primary">Sign Up</Link>
                <Link to = "/login" className="btn btn-light">Login</Link>
            
                {/* <a href="login.html" className="btn btn-light">Login</a> */}
            </div>
            </div>
        </div>
        </section>
    </>
  )
};

Landing.propType = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
