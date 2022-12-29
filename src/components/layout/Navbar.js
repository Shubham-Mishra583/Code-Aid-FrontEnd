import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = ({ logout, auth: { isAuthenticated, loading } }) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const authLinks = (
    <>
      <ul>
      <li>
        <Link to="/ide">IDE</Link>
      </li>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        |
        <Link to="/dashboard">
          <i className="fas fa-user" />
          <span className="hide-sm"> Dashboard</span>
        </Link>
      </li>
      <li>
        <a href="/" onClick={logout}>
          <i className="fas fa-sign-out-alt" />
          <span className="hide-sm"> Logout</span>
        </a>
      </li>
    </ul>

    <div className="nav-auth-mobile">
               {" "}
        <button onClick={showDrawer}>
              <span><MenuOutlined/></span>
          </button>

        <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <div className="drawer" style={{display : "flex", flexDirection : "column"}}>
          <Link to = "/" onClick={onClose}>Home</Link>
          <Link to = "/ide" onClick={onClose}>IDE</Link>
          <Link to = "/profiles" onClick={onClose}>Developers</Link>
          <Link to="/posts" onClick={onClose}>Posts</Link>
          <Link to = "/dashboard" onClick={onClose}></Link>
          <a href="/" onClick={logout}>Logout</a>
        </div>

      </Drawer>
      </div>
    </>
  );

  const guestLinks = (
    <>
      <ul className="nav-guest">
        <li>
          <Link to="/ide">IDE</Link>
        </li>

        <li>
          <Link to="/profiles">Developers</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <div className="nav-guest-mobile">
               {" "}
        {/* <Button > */}
          <button onClick={showDrawer}>
              <span><MenuOutlined/></span>
          </button>
                  
        {/* </Button> */}

        <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <div className="drawer" style={{display : "flex", flexDirection : "column"}}>
          <Link to = "/" onClick={onClose}>Home</Link>
          <Link to = "/ide" onClick={onClose} >IDE</Link>
          <Link to = "/profiles" onClick={onClose}>Developers</Link>
          <Link to = "/register" onClick={onClose}> Register</Link>
          <Link to = "/login" onClick={onClose}>Login</Link>
        </div>

      </Drawer>
      </div>
    </>
  );

  return (
    <>
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">
            <i className="fas fa-code" /> CodeAid
          </Link>
        </h1>
        {!loading && <div>{isAuthenticated ? authLinks : guestLinks}</div>}
      </nav>
    </>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
